document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
  
    dropdownToggle.addEventListener("click", (event) => {
      event.preventDefault(); // Mencegah navigasi default
      const parentLi = dropdownToggle.parentElement;
  
      parentLi.classList.toggle("active"); // Tambah/hapus kelas active
    });
  });
  