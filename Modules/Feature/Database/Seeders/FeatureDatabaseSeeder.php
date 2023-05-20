<?php

namespace Modules\Feature\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Feature\Entities\Feature;
use Modules\Feature\Entities\FeatureValue;

class FeatureDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        Feature::create([
            'name:en' => "Color",
            'name:ar' => "اللون",
            'key' => 'Color'
        ]);

        Feature::create([
            'name:en' => "Size",
            'name:ar' => "الحجم",
            'key' => 'Size'
        ]);

    }
}
