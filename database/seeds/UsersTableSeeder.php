<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        DB::table('users')->truncate();

        $users = [
            [
                'name' => 'Zulfa Juniadi',
                'email' => 'zulfajuniadi@gmail.com',
                'password' => app('hash')->make('abcd1234'),
            ],
            [
                'name' => 'John Doe',
                'email' => 'johndoe@test.com',
                'password' => app('hash')->make('abcd1234')
            ]
        ];

        foreach ($users as $user) {
            User::create($user);
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=1;');


    }
}

