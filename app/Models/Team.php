<?php

namespace App\Models;

use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticable;

class Team extends Authenticable
{
    use HasFactory;
    protected $table = 'teams';
    protected $fillable = [
        'team_name',
        'leader',
        'password',
        'email',
        'phone',
        'line_id',
        'github_id',
        'birth_place',
        'birth_date',
        'cv',
        'isBinusian',
        'IDCard',
    ];

    protected $hidden = [
        'password',
    ];
}
