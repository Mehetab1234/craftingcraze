document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;

    // Check saved mode
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        modeToggle.textContent = "☀ Light Mode";
    }

    modeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            modeToggle.textContent = "☀ Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            modeToggle.textContent = "🌙 Dark Mode";
        }
    });

    console.log("CraftingCraze Gaming Website Loaded!");
});
