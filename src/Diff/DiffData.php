<?php

namespace Squeevee\Ajax\Diff;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Database\ConnectionInterface;

use Carbon\Carbon;

class DiffData
{
    private $database;
    private $settings;

    public function __construct(ConnectionInterface $database, SettingsRepositoryInterface $settings)
    {
        $this->database = $database;
        $this->settings = $settings;
    }

    public function writeDiff($time, $model, $id, $contents)
    {
        $this->database->table('ajax_diffs')->insert([
            'time' => $time,
            'model_type' => $model,
            'model_id' => $id,
            'contents' => json_encode($contents)
        ]);
    }

    public function getDiffs($since = null, $model = null, $ids = null)
    {
        $query = $this->database->table('ajax_diffs');
        if ($since)
            $query = $query->where('time', '>=', $since);
        if ($model)
            $query = $query->where('model_type', '=', $model);
        if ($ids)
            $query = $query->whereIn('model_id', $ids);

        return $query->orderBy('model_id')->get()->all();
    }

    public function autoPrune()
    {
        $diff_lifetime = intval($this->settings->get('ajax.diff-lifetime'));
        $expiration = Carbon::now('UTC')->subSeconds($diff_lifetime);

        $this->pruneDiffs($expiration);
    }

    public function pruneDiffs($before = null)
    {
        $query = $this->database->table('ajax_diffs');
        
        if ($before)
            $query = $query->where('time', '<', $before);
        
        $query->delete();
    }
}