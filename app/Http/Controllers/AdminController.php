<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function admin(Request $request)
    {
        // Ambil tim berdasarkan pencarian nama tim jika ada
        $search = $request->input('search');
        if ($search) {
            $teams = Team::where('team_name', 'LIKE', '%' . $search . '%')->get();
        } else {
            $teams = Team::all();
        }

        $totalTeams = $teams->count(); // Hitung jumlah tim

        // Mengirim data ke view admin
        return view('admin', compact('teams', 'totalTeams'));
    }
}
