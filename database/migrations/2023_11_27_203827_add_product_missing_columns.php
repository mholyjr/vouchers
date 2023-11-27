<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function ($table) {
            $table->integer('num_of_redeems')->default(1);
            $table->integer('valid_for')->default(1);
            $table->string('valid_period')->default('years');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('num_of_redeems');
            $table->dropColumn('valid_for');
            $table->dropColumn('valid_period');
        });
    }
};
