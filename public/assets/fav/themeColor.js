function setThemeColor() {
    const themeColorMetaTag = document.getElementById('theme-color-meta');
    const lightColor = '#e4e4e7';  // Colore per la light mode
    const darkColor = '#1b1d20';   // Colore per la dark mode

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeColorMetaTag.setAttribute('content', darkColor);
    } else {
        themeColorMetaTag.setAttribute('content', lightColor);
    }
}

// Set theme color on page load
setThemeColor();

// Listen for changes in the color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeColor);