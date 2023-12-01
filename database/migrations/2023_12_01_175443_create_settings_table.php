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
    Schema::create('settings', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string('setting_key')->unique();
      $table->text('setting_value');
      $table->string('setting_category');
      $table->string('data_type');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('settings');
  }
};
