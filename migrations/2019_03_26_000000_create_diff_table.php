<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::createTable(
    'ajax_diffs',
    function (Blueprint $table) {
        $table->string('model_type', 100);
        $table->integer('model_id');
        $table->text('contents');
        $table->timestamp('time');

        $table->index('time');
        $table->index(['model_type', 'model_id']);
    }
);
