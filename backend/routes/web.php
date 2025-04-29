<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return [
        'Laravel' => app()->version(),
        'Status' => "Online"
    ];
});

Route::prefix('api')->group(function () {});

require __DIR__ . '/auth.php';
