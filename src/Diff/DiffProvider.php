<?php

namespace Squeevee\Ajax\Diff;

use Flarum\Foundation\AbstractServiceProvider;

class DiffProvider extends AbstractServiceProvider
{
    public function register()
    {
        $this->app->singleton(DiffMaker::class);
        $this->app->singleton(DiffData::class);
    }
}