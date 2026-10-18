// =========================================
// CYBERQUEST - HOME PAGE
// =========================================

const ACCOUNT_KEY = "cyberquest_account";

const startButton =
    document.getElementById("startButton");

const pageLoader =
    document.getElementById("pageLoader");


// =========================================
// START GAME
// =========================================

if (startButton) {

    startButton.addEventListener("click", () => {

        // Show loading screen
        if (pageLoader) {
            pageLoader.classList.add("show");
        }

        setTimeout(() => {

            // Check whether an account already exists
            const account =
                localStorage.getItem(ACCOUNT_KEY);


            // =================================
            // ACCOUNT EXISTS
            // =================================

            if (account) {

                // Existing user → Login
                window.location.href =
                    "pages/login.html";

                return;
            }


            // =================================
            // NO ACCOUNT
            // =================================

            // New user → Register
            window.location.href =
                "pages/register.html";

        }, 500);

    });

}
// =========================================
// THEME SYSTEM
// =========================================

const themeToggle =
    document.getElementById("themeToggle");


// =========================================
// CHECK SAVED THEME
// =========================================

const savedTheme =
    localStorage.getItem("cyberquest_theme");


// =========================================
// APPLY SAVED LIGHT THEME
// =========================================

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    if (themeToggle) {

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark theme"
        );

    }

}


// =========================================
// THEME TOGGLE BUTTON
// =========================================

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        // Switch light/dark class
        document.body.classList.toggle(
            "light-theme"
        );


        // Check current theme
        const isLight =
            document.body.classList.contains(
                "light-theme"
            );


        // =================================
        // LIGHT THEME
        // =================================

        if (isLight) {

            themeToggle.textContent = "🌙";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark theme"
            );

            localStorage.setItem(
                "cyberquest_theme",
                "light"
            );

        }


        // =================================
        // DARK THEME
        // =================================

        else {

            themeToggle.textContent = "☀️";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light theme"
            );

            localStorage.setItem(
                "cyberquest_theme",
                "dark"
            );

        }

    });

}