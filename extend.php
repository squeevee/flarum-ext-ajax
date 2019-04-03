<?php

namespace Squeevee\Ajax;

use Flarum\Foundation\Application;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    (new Extend\Locales(__DIR__ . '/locale') ),
    (new Extend\Routes('api'))
        ->post('/ajax-diff', 'ajax_diff', Controller\AjaxController::class),
    function (Dispatcher $events, Application $app) {
        $app->register(Diff\DiffProvider::class);
        $events->subscribe(Listener\ChangeListener::class);
    }
];
