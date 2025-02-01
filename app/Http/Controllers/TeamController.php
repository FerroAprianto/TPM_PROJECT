<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class TeamController extends Controller
{
    //Fungsi untuk menampilkan halaman 
    function login() {
        return view('login');
    }

    function registration() {
        return view('register');
    }


    //Fungsi untuk mengisi forum
    function loginPost(Request $request) {

    // Validasi input dari form
    $request->validate([
        'team_name' => 'required',
        'password' => 'required'
    ]);

    // Ambil kredensial login
    $team_name = $request->team_name;
    $password = $request->password;

    // Cek apakah login dengan admin atau tim
    if ($team_name === 'admin') {
        // Cari admin di tabel admins
        $user = Admin::where('team_name', $team_name)->first();

        // Jika ditemukan dan password cocok
        if ($user && Hash::check($password, $user->password)) {
            // Arahkan ke Admin Panel
            return redirect()->route('admin');
        }
    } else {
        // Cari tim di tabel teams
        $user = Team::where('team_name', $team_name)->first();

        // Jika ditemukan dan password cocok
        if ($user && Hash::check($password, $user->password)) {
            // Arahkan ke Dashboard Tim
            return redirect()->route('dashboard');
        }
    }

    // Jika login gagal
    return redirect(route('login'))->with('error', 'Login details are not valid');

        // $request->validate([
        //     'team_name' => 'required',
        //     'password' => 'required'
        // ]);

        // // Ambil kredensial login
        // $credentials = $request->only('team_name', 'password');

        // // Coba login dengan kredensial
        // if (Auth::guard('team')->attempt($credentials)) {
        //     // Ambil data user yang sudah login
        //     $user = Auth::guard('team')->user();

        //     // Jika nama tim adalah admin_group, arahkan ke Admin Panel
        //     if ($user->team_name === 'admin') {
        //         return redirect()->route('admin');
        //     }

        //     // Jika bukan admin, arahkan ke Dashboard Team
        //     return redirect()->route('home');
        // }

        // // Jika login gagal, tampilkan pesan error
        // return redirect(route('login'))->with('error', 'Login details are not valid');
    }

    function registrationPost(Request $request) {
        $request->validate([
            'leader' => 'required|string|max:255',
            'email' => 'required|email|unique:teams,email',
            'phone' => 'required',
            'line_id' => 'required|string|max:255',
            'github_id' => 'required|string|max:255',
            'birth_place' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'cv' => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'isBinusian' => 'required|in:binusian,non-binusian',
            'IDCard' => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'team_name' => 'required|string|max:255',
            'password' => [
                'required',
                'confirmed',
                'min:8',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/',
            ],
        ], [
            'password.regex' => 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
            'password.min' => 'Password must be at least 8 characters long.',
            'password.confirmed' => 'Password confirmation does not match.',
        ]);
        $data['team_name'] = $request->team_name;
        $data['password'] = Hash::make($request->password);
        $data['leader'] = $request->leader;
        $data['email'] = $request->email;
        $data['phone'] = $request->phone;
        $data['line_id'] = $request->line_id;
        $data['github_id'] = $request->github_id;
        $data['birth_place'] = $request->birth_place;
        $data['birth_date'] = $request->birth_date;
        $data['isBinusian'] = $request->isBinusian;
        $data['cv'] = $request->file('cv')->store('public/cv');
        $data['IDCard'] = $request->file('IDCard')->store('public/IDCard');
        // dd($data);
        $user = Team::create($data);
        if (!$user) {
            return redirect(route('register'))->with('error', 'Registration details are not valid');
        }
        return redirect(route('login'))->with('success', 'Registration successful');
    }

    //Fungsi untuk logout
    function logout() {
        Session::flush();
        Auth::logout();
        redirect(route('login'));
    }

    public function index(Request $request)
    {
        $search = $request->input('search');

        // Ambil tim berdasarkan pencarian nama tim
        if ($search) {
            $teams = Team::where('team_name', 'LIKE', '%' . $search . '%')->get();
        } else {
            $teams = Team::all();
        }

        $totalTeams = $teams->count(); // Hitung jumlah tim

        return view('admin', compact('teams', 'totalTeams')); // Kirim data ke view
    }

    // Fitur untuk menampilkan detail tim
    public function show($id)
    {
        $team = Team::findOrFail($id);
        return view('team-details', compact('team'));
    }

    // Fitur untuk mengedit tim
    public function edit($id)
    {
        $team = Team::findOrFail($id);
        return view('edit-team', compact('team')); 
    }

    // Fitur untuk menghapus tim
    public function destroy($id)
    {
        $team = Team::findOrFail($id);
        $team->delete();
        return redirect()->route('teams.index');
    }
    
}
