(function () {
    function getThemePreference() {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
    }

    // Apply the theme immediately
    var theme = getThemePreference();
    setTheme(theme);

    // Optionally, you can add a class to the html element to indicate that JS has loaded
    document.documentElement.classList.add('js-theme-loaded');
});