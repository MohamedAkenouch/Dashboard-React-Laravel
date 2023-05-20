<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
           
            $table->bigIncrements('id');
            $table->string('order_id')->unique();
        
            $table->foreignId('user_id')->constrained('users', 'id');
            

            $table->enum('status', ['pending', 'completed', 'conceled'])->default('pending');
            $table->decimal('sub_total', 20, 6);
            $table->decimal('shipping', 20, 6);
            $table->dateTime('start_date')->nullable();
            $table->dateTime('end_date')->nullable();
            $table->unsignedInteger('item_count');

            $table->boolean('payment_status')->default(0);
           
            $table->string('receiver_addr',1000);
            $table->string('city',1000);
            $table->string('user_phone_number');
            $table->string('order_img');
            $table->string('receiver_phone_number');
            $table->string('addt_addr',1000);
            $table->string('selected_msg',1000);
            $table->string('phrase',1000);
           

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
        Schema::dropIfExists('orders');
    }
};
