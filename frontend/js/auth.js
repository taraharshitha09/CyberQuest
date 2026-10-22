const ACCOUNT_KEY = "cyberquest_account";
const LOGIN_KEY = "cyberquest_logged_in";
function getAccount() {
    const account = localStorage.getItem(ACCOUNT_KEY);

    if (!account) {
        return null;
    }

    try {
        return JSON.parse(account);
    } catch (error) {
        console.error("Could not read account data.");
        return null;
    }
}


function saveAccount(account) {
    localStorage.setItem(
        ACCOUNT_KEY,
        JSON.stringify(account)
    );
}


function showError(inputId, message) {
    const input = document.getElementById(inputId);

    if (!input) return;

    const group = input.closest(".input-group");

    const error = document.getElementById(
        `${inputId}Error`
    );

    if (group) {
        group.classList.add("error");
        group.classList.remove("success");
    }

    if (error) {
        error.textContent = message;
    }
}


function clearError(inputId) {
    const input = document.getElementById(inputId);

    if (!input) return;

    const group = input.closest(".input-group");

    const error = document.getElementById(
        `${inputId}Error`
    );

    if (group) {
        group.classList.remove("error");
    }

    if (error) {
        error.textContent = "";
    }
}


function markSuccess(inputId) {
    const input = document.getElementById(inputId);

    if (!input) return;

    const group = input.closest(".input-group");

    if (group) {
        group.classList.remove("error");
        group.classList.add("success");
    }

    const error = document.getElementById(
        `${inputId}Error`
    );

    if (error) {
        error.textContent = "";
    }
}


/* =========================================================
   PASSWORD STRENGTH
========================================================= */

function getPasswordStrength(password) {

    let score = 0;

    if (password.length >= 4) {
        score++;
    }

    if (password.length >= 12) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }

    return score;
}


function updatePasswordStrength(password) {

    const progress =
        document.getElementById("strengthProgress");

    const text =
        document.getElementById("strengthText");

    if (!progress || !text) {
        return;
    }

    if (password.length === 0) {

        progress.style.width = "0%";
        progress.style.background = "#ff4d6d";

        text.textContent =
            "Use at least 4 characters";

        return;
    }

    const score =
        getPasswordStrength(password);

    if (score <= 1) {

        progress.style.width = "25%";
        progress.style.background = "#ff4d6d";

        text.textContent =
            "Weak password";

    } else if (score <= 3) {

        progress.style.width = "60%";
        progress.style.background = "#ffd166";

        text.textContent =
            "Good password";

    } else {

        progress.style.width = "100%";
        progress.style.background = "#38ff88";

        text.textContent =
            "Strong password";
    }
}


/* =========================================================
   SHOW / HIDE PASSWORD
========================================================= */

function setupPasswordToggle(buttonId, inputId) {

    const button =
        document.getElementById(buttonId);

    const input =
        document.getElementById(inputId);

    if (!button || !input) {
        return;
    }

    button.addEventListener("click", () => {

        const isPassword =
            input.type === "password";

        input.type =
            isPassword
                ? "text"
                : "password";

        button.textContent =
            isPassword
                ? "Hide"
                : "Show";
    });
}


/* =========================================================
   REGISTER PAGE
========================================================= */

function setupRegisterPage() {

    const form =
        document.getElementById("registerForm");

    if (!form) {
        return;
    }

    const fullName =
        document.getElementById("fullName");

    const email =
        document.getElementById("email");

    const username =
        document.getElementById("username");

    const password =
        document.getElementById("password");

    const confirmPassword =
        document.getElementById("confirmPassword");

    const terms =
        document.getElementById("terms");

    const goToLogin =
        document.getElementById("goToLogin");


    /* Password toggle */

    setupPasswordToggle(
        "togglePassword",
        "password"
    );


    /* Password strength */

    password.addEventListener("input", () => {

        updatePasswordStrength(
            password.value
        );

        clearError("password");
    });


    /* Live validation */

    fullName.addEventListener(
        "input",
        () => clearError("fullName")
    );

    email.addEventListener(
        "input",
        () => clearError("email")
    );

    username.addEventListener(
        "input",
        () => clearError("username")
    );

    confirmPassword.addEventListener(
        "input",
        () => clearError("confirmPassword")
    );


    /* =====================================================
       REGISTER
    ===================================================== */

    form.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            let valid = true;


            /* Full Name */

            const nameValue =
                fullName.value.trim();

            if (nameValue.length < 2) {

                showError(
                    "fullName",
                    "Please enter your name."
                );

                valid = false;

            } else {

                markSuccess("fullName");
            }


            /* Email */

            const emailValue =
                email.value.trim().toLowerCase();

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {

                showError(
                    "email",
                    "Please enter a valid email."
                );

                valid = false;

            } else {

                markSuccess("email");
            }


            /* Username */

            const usernameValue =
                username.value.trim();

            const usernamePattern =
                /^[a-zA-Z0-9_]{3,20}$/;

            if (
                !usernamePattern.test(
                    usernameValue
                )
            ) {

                showError(
                    "username",
                    "Use 3-20 letters, numbers, or _."
                );

                valid = false;

            } else {

                markSuccess("username");
            }


            /* Password */

            const passwordValue =
                password.value;

            if (passwordValue.length < 4) {

                showError(
                    "password",
                    "Password must have 4 characters."
                );

                valid = false;

            } else {

                markSuccess("password");
            }


            /* Confirm Password */

            if (
                confirmPassword.value !==
                passwordValue
            ) {

                showError(
                    "confirmPassword",
                    "Passwords do not match."
                );

                valid = false;

            } else {

                markSuccess(
                    "confirmPassword"
                );
            }


            /* Terms */

            const termsError =
                document.getElementById(
                    "termsError"
                );

            if (!terms.checked) {

                if (termsError) {
                    termsError.textContent =
                        "Please agree to the rules.";
                }

                valid = false;

            } else {

                if (termsError) {
                    termsError.textContent = "";
                }
            }


            /* Stop if invalid */

            if (!valid) {
                return;
            }


            /* =================================================
               CHECK EXISTING LOCAL ACCOUNT
            ================================================= */

            const existingAccount =
                getAccount();

            if (
                existingAccount &&
                existingAccount.email &&
                existingAccount.email.toLowerCase() ===
                    emailValue
            ) {

                showError(
                    "email",
                    "An account with this email already exists."
                );

                return;
            }


            /* =================================================
               REGISTER WITH SPRING BOOT
            ================================================= */

            try {

                const response = await fetch(
                    "https://cyberquest-nx18.onrender.com/api/auth/register",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            username: usernameValue,
                            email: emailValue,
                            password: passwordValue
                        })
                    }
                );


                const data =
                    await response.json();


                /* Registration failed */

                if (!response.ok) {

                    showError(
                        "email",
                        data.message ||
                        data.error ||
                        "Registration failed."
                    );

                    return;
                }


                /* =================================================
                   SAVE ACCOUNT
                ================================================= */

                const account = {

                    fullName: nameValue,

                    email: data.email,

                    username: data.username,

                    userId: data.userId,

                    progress: {

                        currentWorld: 1,

                        currentLevel: 1,

                        completedLevels: [],

                        points: 0,

                        coins: 0,

                        lives: 3
                    }
                };


                saveAccount(account);


                /* Login session */

                localStorage.setItem(
                    LOGIN_KEY,
                    "true"
                );


                /* =================================================
                   OPEN DASHBOARD
                ================================================= */

                window.location.href =
                    "../dashboard.html";

            } catch (error) {

                console.error(
                    "Registration error:",
                    error
                );

                showError(
                    "email",
                    "Cannot connect to CyberQuest server."
                );
            }
        }
    );


    /* Go to Login */

    if (goToLogin) {

        goToLogin.addEventListener(
            "click",
            () => {

                window.location.href =
                    "login.html";
            }
        );
    }
}


/* =========================================================
   LOGIN PAGE
========================================================= */

function setupLoginPage() {

    const form =
        document.getElementById("loginForm");

    if (!form) {
        return;
    }


    const identifier =
        document.getElementById(
            "loginIdentifier"
        );

    const password =
        document.getElementById(
            "loginPassword"
        );

    const rememberMe =
        document.getElementById(
            "rememberMe"
        );


    /* Password toggle */

    setupPasswordToggle(
        "toggleLoginPassword",
        "loginPassword"
    );


    /* Clear errors */

    identifier.addEventListener(
        "input",
        () => clearError("loginIdentifier")
    );

    password.addEventListener(
        "input",
        () => clearError("loginPassword")
    );


    /* =====================================================
       LOGIN
    ===================================================== */

    form.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            clearError("loginIdentifier");
            clearError("loginPassword");


            const enteredIdentifier =
                identifier.value.trim().toLowerCase();

            const enteredPassword =
                password.value;


            /* Empty identifier */

            if (!enteredIdentifier) {

                showError(
                    "loginIdentifier",
                    "Please enter your email or username."
                );

                return;
            }


            /* Empty password */

            if (!enteredPassword) {

                showError(
                    "loginPassword",
                    "Please enter your password."
                );

                return;
            }


            /* =================================================
               LOGIN WITH SPRING BOOT
            ================================================= */

            try {

                const response = await fetch(
                    "https://cyberquest-nx18.onrender.com/api/auth/login",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            identifier: enteredIdentifier,
                            password: enteredPassword
                        })
                    }
                );


                const data =
                    await response.json();


                /* Login failed */

                if (!response.ok) {

                    showError(
                        "loginPassword",
                        data.message ||
                        data.error ||
                        "Email/username or password is incorrect."
                    );

                    return;
                }


                /* =================================================
                   GET OLD ACCOUNT
                ================================================= */

                const oldAccount =
                    getAccount() || {};


                /* =================================================
                   UPDATE ACCOUNT
                ================================================= */

                const account = {

                    ...oldAccount,

                    username: data.username,

                    email: data.email,

                    userId: data.userId
                };


                saveAccount(account);


                /* Login session */

                localStorage.setItem(
                    LOGIN_KEY,
                    "true"
                );


                /* Remember Me */

                if (rememberMe && rememberMe.checked) {

                    localStorage.setItem(
                        "cyberquest_remember",
                        "true"
                    );

                } else {

                    localStorage.removeItem(
                        "cyberquest_remember"
                    );
                }


                /* =================================================
                   OPEN DASHBOARD
                ================================================= */

                window.location.href =
                    "../dashboard.html";

            } catch (error) {

                console.error(
                    "Login error:",
                    error
                );

                showError(
                    "loginPassword",
                    "Cannot connect to CyberQuest server."
                );
            }
        }
    );
}


/* =========================================================
   THEME SYSTEM
========================================================= */

function setupTheme() {

    const themeToggle =
        document.getElementById("themeToggle");

    const savedTheme =
        localStorage.getItem(
            "cyberquest_theme"
        );


    /* Load saved theme */

    if (savedTheme === "light") {

        document.body.classList.add(
            "light-theme"
        );

        if (themeToggle) {

            themeToggle.textContent = "🌙";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark theme"
            );
        }
    }


    /* Theme toggle */

    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "light-theme"
                );

                const isLight =
                    document.body.classList.contains(
                        "light-theme"
                    );


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

                } else {

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
            }
        );
    }
}


/* =========================================================
   PAGE START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupRegisterPage();

        setupLoginPage();

        setupTheme();
    }
);

