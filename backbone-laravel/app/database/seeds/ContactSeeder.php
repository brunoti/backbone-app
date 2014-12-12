<?php  

class ContactSeeder extends Seeder {

    public function run()
    {
        DB::table('contacts')->delete();        

        Contact::create([
            'first_name' =>  'Bruno',
            'last_name'  =>  'Oliveira',
            'email'      =>  'bruno@indb.com.br',
            'description'=>  'Cool Guy'
        ]);

        Contact::create([
            'first_name' =>  'Mauricio',
            'last_name'  =>  'Silva',
            'email'      =>  'mauricio@indb.com.br',
            'description'=>  'Nice Guy'
        ]);

        Contact::create([
            'first_name' =>  'Leandro',
            'last_name'  =>  'Martins',
            'email'      =>  'leandro@indb.com.br',
            'description'=>  'The boss'
        ]);

        Contact::create([
            'first_name' =>  'Kaliman',
            'last_name'  =>  'Borges',
            'email'      =>  'kaliman@indb.com.br',
            'description'=>  'The canadian boss'
        ]);
    }

}
