<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>UserDashboard</title>
    <link rel="stylesheet" href={{ asset('css/dashboard.css') }}>
</head>
<body>
    <div class="wrapper">
        <nav class="nav">
            <h3 class="title">Hackaton</h3>
            <div class="nav-menu">
                <ul>
                    <li><a href="#" >Home</a></li>
                    <li><a href="#" >Champion Prizes</a></li>
                    <li><a href="#" >Mentor & Jury</a></li>
                    <li><a href="#" >About</a></li>
                    <li><a href="#" >FAQ</a></li>
                    <li><a href="#" >Timeline</a></li>
                </ul>
            </div>
            <div class="LOG-OUT">
                <button class="logout-btn"><a href= "{{ route('home') }}" class="btnsign">Logout</a></button>
            </div>
        </nav>
    </div>
        <div class="profile">
            <div class="profile-title">MBOIS TECH TEAM</div>
            <div class="profile-box">
                <div class="leader-profile-title">
                    Leader Profile
                </div>
                <div class="leader-profile">
                    <div class="form">
                        <label>Full Name :</label>
                        Syaiful Ramadhan
                    </div>
                    <div class="form">
                        <label>Email :</label>
                        syaiful.ram@gmail.com
                    </div>
                    <div class="form">
                        <label>Whatshapp Number :</label> 
                        +62 378238
                    </div>
                    <div class="form">
                        <label>Line ID :</label>
                        syaifulram
                    </div>
                    <div class="form">
                        <label>GitHub ID :</label>
                        syaifulramadhan
                    </div>
                    <div class="form">
                        <label>Birth Place :</label>
                        Malang
                    </div>
                    <div class="form">
                        <label>Birth Date :</label>
                        25 March 2005
                    </div>
                </div>
                <div class="view">
                    <button class="view-btn">View CV</button>
                    <button class="view-btn">View ID Card / Flazz Card</button>
                </div>
            </div>

        </div>
        <div class="schedule">
            <img src="jpg/Shcedule2.svg" alt="Schedule-img">
        </div>

        <div class="Lets-connect">
            <div class="container">
                <div class="form-group">
                    <div class="form-title">
                        <div class="form-title-1">Let’s connect constellations</div>
                        <div class="form-title-2">Let's align our constellations! Reach out and <br>let the magic of collaboration illuminate our skies.</div>
                    </div>
                    <div class="form-input-name">
                        <input type="text" placeholder="Last Name">
                        <input type="text" placeholder="First Name">
                    </div>
                    <div class="form-input-email">
                        <input type="email" placeholder="Email">
                    </div>
                    <div class="form-input-number">
                        <input type="text" placeholder="Phone Number">
                    </div>
                    <div class="form-input-message">
                        <input type="text" placeholder="Message">
                    </div>
                    <div class="form-input-send">
                        <button class="send-btn">
                            Send it to the moon
                            <img src="jpg/rocket.svg" alt="rocket">
                        </button>
                    </div>
                </div>
                <img src="jpg/Astronout.svg" alt="Astronout-img">
            </div>
        </div>
        
        <div class="footer">
            <div class = "footer-text"><p>Powered and Organized by</p></div>
            <img src="jpg/BNCC-logo white 1.svg" alt="BNCC_Logo">
        </div>

        <div class="footer2">
            <div class="Rectangle1">
                <img src="jpg/Rectangle 97.svg" alt="Rectangle1">
            </div>
            <div class="Rectangle2">
                <img src="jpg/Rectangle 96.svg" alt="Rectangle2">
            </div>
            <div class="Rectangle3">
                <img src="jpg/Rectangle 95.svg" alt="Rectangle3">
            </div>
            <div class="text">
                <img src="jpg/Frame 14.svg" alt="Text">
            </div>
        </div>
</body>
</html>