// Theme switcher
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = '☀️';
  document.body.appendChild(themeToggle);

  // Check for saved theme preference, default to dark if none exists
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '☀️';
  } else {
    themeToggle.innerHTML = '🌙';
  }

  // Toggle theme
  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '🌙';
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '☀️';
    }
  });
}); 