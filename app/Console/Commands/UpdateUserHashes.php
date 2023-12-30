<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class UpdateUserHashes extends Command
{
  protected $signature = 'users:update-hashes';
  protected $description = 'Update user hashes';

  public function handle()
  {
    $this->info('Updating user hashes...');

    User::all()->each(function ($user) {
      $user->hash = md5($user->email . $user->id);
      $user->save();
    });

    $this->info('All user hashes have been updated.');
  }
}
