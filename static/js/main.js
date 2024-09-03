function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }
}

// Ensure the light theme is the default on page load
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    if (body.classList.contains('dark')) {
        themeToggle.checked = true;
    } else {
        body.classList.add('light');
    }
});