<?php

class TasksSeeder extends Seeder {

    public function run()
    {
        DB::table('tasks')->delete();
        Tasks::create(['title' =>  'Go to the Store']);
        Tasks::create(['title' =>  'Go to the movie']);
        Tasks::create(['title' =>  'Go to the Gym']);
    }

}

