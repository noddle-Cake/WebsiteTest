document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById("themeToggle");

    themeToggleButton.addEventListener("click", () => {
        // Toggle the theme classes on the body element
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");

        // Optionally: Save the preference in localStorage
        const newTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", newTheme);
    });

    // On load, check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.remove("light-theme", "dark-theme");
        document.body.classList.add(savedTheme);
    }
});