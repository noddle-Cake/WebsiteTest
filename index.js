document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    const button = document.getElementById("themeToggle");

    // Toggle icon based on theme
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        button.textContent = "☀️"; // Sun icon for light mode
    } else {
        localStorage.setItem("theme", "light");
        button.textContent = "🌙"; // Moon icon for dark mode
    }
});

// Apply stored theme on page load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    const button = document.getElementById("themeToggle");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        button.textContent = "☀️"; // Show sun icon if in dark mode
    } else {
        document.body.classList.add("light-theme");
        button.textContent = "🌙"; // Show moon icon if in light mode
    }
});