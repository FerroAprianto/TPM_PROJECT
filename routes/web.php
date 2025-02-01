<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\AdminController;

Route::get('/', function(){
    return view('index');
})->name('home');

Route::get('/login', [TeamController::class, 'login'])->name('login');
Route::post('/login', [TeamController::class, 'loginPost'])->name('login.post');

Route::get('/register', [TeamController::class, 'registration'])->name('register');
Route::post('/register', [TeamController::class, 'registrationPost'])->name('register.post');

Route::get('/logout', [TeamController::class, 'logout'])->name('logout');

Route::get('/admin', [AdminController::class, 'admin'])->name('admin');

Route::get('/admin/teams', [TeamController::class, 'index'])->name('teams.index'); // Menampilkan tim
Route::get('/team/{id}', [TeamController::class, 'show'])->name('team.show'); // Detail tim
Route::get('/team/{id}/edit', [TeamController::class, 'edit'])->name('team.edit'); // Edit tim
Route::delete('/team/{id}', [TeamController::class, 'destroy'])->name('team.destroy');

Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
