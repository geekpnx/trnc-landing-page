function toggleTheme() {
   const themeToggle = document.getElementById('theme-toggle');
   if (themeToggle.checked) {
       document.body.classList.remove('dark');
       document.body.classList.add('light');
   } else {
       document.body.classList.remove('light');
       document.body.classList.add('dark');
   }
}