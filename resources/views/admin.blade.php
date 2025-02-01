<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Panel</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/css/admin.css" />
    <script src="/js/admin.js"></script>
  </head>
  <body>
    <div class="sidebar">
      <h1>HACKATHON</h1>
      <ul>
        <li>
          <a href="#" class="dropdown-toggle">Feature</a>
          <ul class="dropdown-menu">
            <li><a href="{{ url('/admin/teams#') }}">Participant</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="header">
        <form action="{{ route('teams.index') }}" method="GET">
          <input type="text" name="search" placeholder="Search" value="{{ request()->search }}" />
          <button type="submit">Search</button>
        </form>
        <div class="profile">
          <img src="/jpg/profile.png" alt="Profile" />
        </div>
      </div>

      <div class="dashboard">
        <h2>PARTICIPANT</h2>
        <div class="card">
          <div class="icon">
            <img src="/jpg/project-icon-2.png" alt="Teams Icon" />
          </div>
          <div>
            <h3>{{ $totalTeams }}</h3>
            <p>Teams</p>
          </div>
        </div>

        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              @foreach($teams as $team)
              <tr>
                <td>{{ $team->team_name }}</td>
                <td class="action-buttons">
                  <a href="{{ route('team.show', $team->id) }}">
                    <img src="/jpg/eye.png" alt="View" />
                  </a>
                </td>
                <td class="action-buttons">
                  <a href="{{ route('team.edit', $team->id) }}">
                    <img src="/jpg/edit.png" alt="Edit" />
                  </a>
                </td>
                <td class="action-buttons">
                  <form action="{{ route('team.destroy', $team->id) }}" method="POST" style="display:inline;">
                    @csrf
                    @method('DELETE')
                    <button type="submit">
                      <img src="/jpg/trash-alt.png" alt="Delete" />
                    </button>
                  </form>
                </td>
              </tr>
              @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </body>
</html>
