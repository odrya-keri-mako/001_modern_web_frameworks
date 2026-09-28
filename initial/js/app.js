// Set methods
const methods = {

  // Initialize
  init: () => {

    // Get last theme choice, and set it
    let theme = localStorage.getItem("001_modern_web_frameworks_initial_theme");
    theme = theme ?? "dark";
    document.body.setAttribute("data-bs-theme", theme);

    // Change theme icon
    methods.changeThemeIcon(theme);

    // Set footer current year
    const elementCurrentYear = document.querySelector('#current-year');
    if (elementCurrentYear)
      elementCurrentYear.textContent = (new Date()).getFullYear();
  },

  // Change theme icon
  changeThemeIcon: (theme) => {
    const themeIcon = document.querySelector('#theme-icon');
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  },

  // Toggle theme
  toggleTheme() {
    let theme = document.body.getAttribute("data-bs-theme");
    theme = theme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-bs-theme", theme);
    methods.changeThemeIcon(theme);
    localStorage.setItem("001_modern_web_frameworks_initial_theme", theme);
  }
};

// Initialize
methods.init();