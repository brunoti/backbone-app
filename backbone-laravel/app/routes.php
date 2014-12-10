<?php

Route::resource('tasks', 'TasksController');
Route::resource('contacts', 'ContactsController');

Route::get('', function(){
    return View::make('index');
});
