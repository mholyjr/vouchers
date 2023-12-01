<?php

namespace App\Helpers;

use App\Models\Settings;

class SettingsHelper
{
  /**
   * Retrieve a setting value by key.
   *
   * @param string $key
   * @return mixed
   */
  public static function get($key)
  {
    return Settings::where('setting_key', $key)->first()->setting_value ?? null;
  }

  /**
   * Retrieve all settings from the database.
   *
   * @return array
   */
  public static function getAllSettings(): array
  {
    return Settings::all()->pluck('setting_value', 'setting_key')->toArray();
  }
}
