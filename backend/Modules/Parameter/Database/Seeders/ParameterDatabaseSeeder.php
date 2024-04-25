<?php

namespace Modules\Parameter\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Parameter\Entities\Parameter;

class ParameterDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        Parameter::create([
            'key' => "extra_amount",
            'value' => '1',
            'type' => 'numeric'
        ]);

        Parameter::create([
            'key' => "added_tax",
            'value' => '5',
            'type' => 'percentage'
        ]);
    }
}
