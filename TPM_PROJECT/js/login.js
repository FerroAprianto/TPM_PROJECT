// Tunggu hingga DOM siap
document.addEventListener("DOMContentLoaded", () => {
    // Ambil elemen-elemen form dan input
    const form = document.querySelector("form");
    const teamNameInput = document.getElementById("team-name");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");
    const togglePasswordBtn = document.querySelector(".toggle-password");
    
    // Validasi input saat submit
    form.addEventListener("submit", (event) => {
      let isValid = true;
  
      // Validasi "Team's Name"
      if (teamNameInput.value.trim() === "") {
        usernameError.style.display = "block";
        teamNameInput.classList.add("input-error");
        isValid = false;
      } else {
        usernameError.style.display = "none";
        teamNameInput.classList.remove("input-error");
      }
  
      // Validasi "Password"
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(passwordInput.value)) {
        passwordError.style.display = "block";
        passwordInput.classList.add("input-error");
        isValid = false;
      } else {
        passwordError.style.display = "none";
        passwordInput.classList.remove("input-error");
      }
  
      // Jika tidak valid, hentikan submit
      if (!isValid) {
        event.preventDefault();
      }
    });
  
    // Toggle password visibility
    togglePasswordBtn.addEventListener("click", () => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordBtn.querySelector("img").src = "/jpg/Eye Closed.png"; // Ganti ikon jika dibutuhkan
      } else {
        passwordInput.type = "password";
        togglePasswordBtn.querySelector("img").src = "/jpg/Eye Open.png"; // Ganti ikon jika dibutuhkan
      }
    });
  });
  