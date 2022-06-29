const changeThemeBtn = document.querySelector("#change-theme");

// Toggle Dark Mode
function toggleDarkMode(){
  document.body.classList.toggle("dark");
}

// Load kight or dark mode
function loadTheme(){
  const darkMode = localStorage.getItem("dark")

  if(darkMode){
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function() {
  toggleDarkMode()

  // Save or remove dark mode
  localStorage.removeItem("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("dark", 1);
  } 
});