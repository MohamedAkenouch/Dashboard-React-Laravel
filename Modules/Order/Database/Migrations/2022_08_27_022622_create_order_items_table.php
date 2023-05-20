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


        Schema::create('order_items', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->foreignId('order_id')->constrained('orders', 'id');;
            $table->foreignId('product_id')->constrained('products', 'id');
            $table->unsignedInteger('quantity');
            $table->decimal('price', 20, 6);
            $table->decimal('size_price', 20, 6);
            $table->string('name');
            $table->string('item_img');
            $table->string('size');
            $table->unsignedInteger('color');

            // $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
            // $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');

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
        Schema::dropIfExists('order_items');
    }
};
