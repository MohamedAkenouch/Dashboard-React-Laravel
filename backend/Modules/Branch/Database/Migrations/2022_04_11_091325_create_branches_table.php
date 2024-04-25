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
        Schema::create('branches', function (Blueprint $table) {
            $table->id();

            $table->time('opening_time');
            $table->time('closing_time');
            $table->time('delivery_opening_time');
            $table->time('delivery_closing_time');
            $table->string('telephone');
            $table->string('whatsapp');
            $table->point('gps_location');
            $table->decimal('delivery_cost',9,2);
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
        Schema::dropIfExists('branches');
    }
};
