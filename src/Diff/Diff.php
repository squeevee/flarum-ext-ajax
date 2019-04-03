<?php

namespace Squeevee\Ajax\Diff;

use Flarum\User\User;
use Flarum\Notification\Notification;
use Flarum\Discussion\Discussion;

class Diff
{
    private $actor;
    private $since;
    private $params;
    private $data;

    private $params_models = [];
    private $params_filters = [];
    private $params_filters_all = [];
    private $params_post_discussions = [];

    public function __construct($data, $since, $actor, $params = null)
    {
        $this->actor = $actor;
        $this->since = $since;
        $this->params = $params;
        $this->data = $data;
    }

    public function aggregate()
    {
        $result = [];

        $this->parseParams();

        foreach ($this->params_filters as $filter_name) {
            $func = 'get_' . $filter_name;
            if (is_callable([$this, $func]))
            {
                $diffs = $this->$func();
                if ($diffs)
                    $result[$filter_name] = $diffs;
            }
            else
            {
                throw new \RuntimeException("Unknown filter requested.");
            }
        }

        return $result;
    }

    private function get_notifications()
    {
        $result = [];

        $actor_id = $this->actor->getAttribute('id');
        $notification_ids = Notification::where('user_id', $actor_id)
            ->where('created_at', '>=', $this->since)->pluck('id')->all();

        foreach($notification_ids as $id)
        {
            array_push($result, [
                'id' => $id,
                'userId' => $actor_id
            ]);
        }

        return $result;
    }

    private function get_posts()
    {
        if ($this->params_filters_all['posts'])
        {
            return $this->merge($this->data->getDiffs($this->since, 'post'));
        }
        else if ($this->params_post_discussions)
        {
            $post_ids = [];

            foreach ($this->params_post_discussions as $discussion_id)
            {
                $discussion = Discussion::find($discussion_id);
                $discussion_posts = $discussion->posts()->pluck('id')->all();
                $post_ids = array_merge($post_ids, $discussion_posts);
            }
            
            return $this->merge($this->data->getDiffs($this->since, 'post', $post_ids));
        }
    }

    private function get_discussions()
    {
        if ($this->params_filters_all['discussions'])
        {
            return $this->merge($this->data->getDiffs($this->since, 'discussion'));
        }
    }

    private function get_users()
    {
        if ($this->params_filters_all['users'])
        {
            return $this->merge($this->data->getDiffs($this->since, 'user'));
        }
    }

    private function merge($diffs)
    {
        $result = [];

        foreach($diffs as $diff)
        {
            $contents = json_decode($diff->contents, true);
            $result = \array_merge_recursive($result, $contents);
        }

        return $result;
    }

    private function parseParams() {
        if (array_key_exists('models', $this->params))
        {
            $models_filters = $this->params['models'];

            foreach ($models_filters as $filter_name => $filter) {
                $this->parseFilter($filter_name, $filter);
            }
        }
    }

    private function parseFilter($name, $filter) {
        array_push($this->params_filters, $name);
        $this->params_filters_all[$name] = false;
        if ($filter === 'all')
        {
            $this->params_filters_all[$name] = true;
        }
        else if ($name === 'posts' && array_key_exists('discussions', $filter))
        {
            $this->params_post_discussions = array_map('intval', $filter['discussions']);
        }
    }
}