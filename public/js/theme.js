// Theme Toggle Script - Initialize before page render
const htmlElement = document.documentElement;
const themeToggles = document.querySelectorAll('[id*="theme-toggle"]');
const sunIcons = document.querySelectorAll('.fas.fa-sun');
const moonIcons = document.querySelectorAll('.fas.fa-moon');

// Check system preference and stored preference
function initializeTheme() {
  const storedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const isDark = storedTheme ? storedTheme === 'dark' : systemPrefersDark;
  
  setTheme(isDark);
}

function setTheme(isDark) {
  if (isDark) {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    updateThemeIcons(true);
  } else {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    updateThemeIcons(false);
  }
}

function updateThemeIcons(isDark) {
  document.querySelectorAll('.theme-icon').forEach((icon) => {
    if (isDark) {
      if (icon.classList.contains('fa-sun')) {
        icon.style.display = 'none';
      } else if (icon.classList.contains('fa-moon')) {
        icon.style.display = 'block';
      }
    } else {
      if (icon.classList.contains('fa-sun')) {
        icon.style.display = 'block';
      } else if (icon.classList.contains('fa-moon')) {
        icon.style.display = 'none';
      }
    }
  });
}

// Toggle Theme
themeToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isDark = htmlElement.classList.toggle('dark');
    setTheme(isDark);
    
    // Add rotation animation
    toggle.style.animation = 'none';
    setTimeout(() => {
      toggle.style.animation = 'spin 0.6s ease-out';
    }, 10);
  });
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
});

// Also initialize immediately if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
  initializeTheme();
}

// Listen to system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches);
  }
});