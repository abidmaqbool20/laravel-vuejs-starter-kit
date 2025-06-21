<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('landing');
});

Route::get('/{any}', function () {
    return view('landing'); // or whatever your root view is
})->where('any', '.*');
