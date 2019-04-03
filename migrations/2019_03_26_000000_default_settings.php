<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::addSettings(
    [
        'ajax.member-period' => 15,
        'ajax.update-guests' => true,
        'ajax.guest-period' => 60,
        'ajax.diff-lifetime' => 120
    ]
);
