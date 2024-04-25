<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feature_value_product', function (Blueprint $table) {
            $table->id();

            $table->foreignId('feature_value_id')
                ->constrained('feature_values')
                ->cascadeOnDelete()->cascadeOnUpdate();

            $table->foreignId('feature_product_id')
                ->constrained('feature_product')
                ->cascadeOnDelete()->cascadeOnUpdate();
            $table->softDeletes();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('feature_value_product');
    }
};
