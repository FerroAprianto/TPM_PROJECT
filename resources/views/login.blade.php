<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login | Hackaton</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="{{ asset('css/login.css') }}" />
    <script src="{{ asset('js/login.js') }}" defer></script>
  </head>
  <body>
    <header>
      <div class="wrapper">
        <nav class="nav">
          <h3 class="title">Hackaton</h3>
          <div class="nav-menu">
            <ul>
              <li><a href="{{ route('home') }}">Home</a></li>
              <li><a href="{{ route('home') }}">Champion Prizes</a></li>
              <li><a href="{{ route('home') }}">Mentor & Jury</a></li>
              <li><a href="{{ route('home') }}">About</a></li>
              <li><a href="{{ route('home') }}">FAQ</a></li>
              <li><a href="{{ route('home') }}">Timeline</a></li>
            </ul>
          </div>
          <div class="sign-in">
            <button class="signin-btn">
              <a href="{{ route('login') }}" class="btnsign">Sign In</a>
            </button>
          </div>
        </nav>
      </div>
    </header>
    <br /><br /><br /><br />
    <div class="login-container">
      <div class="login-box">
        <h1 class="login-title">Sign In</h1>
        <div class="mt-5">
          @if($errors->any())
              <div class="col-12">
                  @foreach($errors->all() as $error)
                      <div class="alert alert-danger">{{$error}}<br></div>
                  @endforeach
              </div>
          @endif
  
          @if(session()->has('error'))
              <div class="alert alert-danger">{{session('error')}}<br></div>
          @endif
  
          @if(session()->has('success'))
              <div class="alert alert-success">{{session('success')}}<br></div>
          @endif
      </div>
        <form action="{{ route('login.post') }}" method="POST" enctype="multipart/form-data" data-multi-step class="multi-step-form" id="form" name="form">
          @csrf
          <div class="input-group">
            <label for="team-name">
              <img src="/jpg/Medal Star.png" alt="Team Icon" class="icon" />
              Team's Name
            </label>
            <input
              type="text"
              class="form-control"
              id="team-name"
              name="team_name"
              placeholder="Masukkan Nama Tim"
              required
            />
          </div>

          <div class="input-group">
            <label for="password">
              <img src="/jpg/Key 02.png" alt="Password Icon" class="icon" />
              Password
            </label>
            <div class="password-container">
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="Masukkan Password"
                required
              />
              <button type="button" class="toggle-password">
                <img src="/jpg/Eye Open.png" alt="Show Password" />
              </button>
            </div>
          </div>
          <a href="#" class="forgot-password">Forgot password?</a>
          <button type="submit" class="login-btn">Login</button>
        </form>
        <p class="register-link">
          New to Hackaton? <a href="{{ route('register') }}">Register Here</a>
        </p>
      </div>
    </div>
  </body>
</html>
