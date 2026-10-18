/* =========================================================
   CYBERQUEST
   DASHBOARD SYSTEM
========================================================= */

const ACCOUNT_KEY = "cyberquest_account";
const LOGIN_KEY = "cyberquest_logged_in";


/* =========================================================
   WORLD DATA
========================================================= */

const worlds = [

    {
        name: "Digital Basics",
        description: "Learn the basic ideas behind cyber security.",
        difficulty: 1
    },

    {
        name: "Network Defense",
        description: "Understand networks, ports and common threats.",
        difficulty: 2
    },

    {
        name: "Web Security",
        description: "Discover common web attacks and defenses.",
        difficulty: 3
    },

    {
        name: "Password Lab",
        description: "Explore passwords, authentication and access control.",
        difficulty: 4
    },

    {
        name: "Social Engineering",
        description: "Learn how attackers trick people and steal information.",
        difficulty: 5
    },

    {
        name: "Malware Zone",
        description: "Identify malware, suspicious files and dangerous behavior.",
        difficulty: 6
    },

    {
        name: "Digital Investigation",
        description: "Follow clues and solve cyber investigation cases.",
        difficulty: 7
    },

    {
        name: "Advanced Defense",
        description: "Handle more complex security situations.",
        difficulty: 8
    },

    {
        name: "Cyber Operations",
        description: "Solve advanced security challenges and incidents.",
        difficulty: 9
    },

    {
        name: "Cyber Mastermind",
        description: "Face the hardest challenges in CyberQuest.",
        difficulty: 10
    }

];


/* =========================================================
   GET ACCOUNT
========================================================= */

function getAccount() {

    const data =
        localStorage.getItem(ACCOUNT_KEY);

    if (!data) {
        return null;
    }

    try {

        return JSON.parse(data);

    } catch {

        return null;
    }
}


/* =========================================================
   AUTH CHECK
========================================================= */

function checkLogin() {

    const loggedIn =
        localStorage.getItem(LOGIN_KEY);

    const account =
        getAccount();


    if (
        loggedIn !== "true" ||
        !account
    ) {

        window.location.href =
            "pages/login.html";

        return null;
    }


    return account;
}


/* =========================================================
   UPDATE PLAYER
========================================================= */

function updatePlayer(account) {

    const name =
        account.fullName || "Explorer";


    const playerName =
        document.getElementById("playerName");

    const welcomeName =
        document.getElementById("welcomeName");

    const playerInitial =
        document.getElementById("playerInitial");


    if (playerName) {

        playerName.textContent =
            name;
    }


    if (welcomeName) {

        welcomeName.textContent =
            name.split(" ")[0];
    }


    if (playerInitial) {

        playerInitial.textContent =
            name.charAt(0).toUpperCase();
    }
}


/* =========================================================
   UPDATE STATS
========================================================= */

function updateStats(account) {

    const progress =
        account.progress || {};


    const world =
        progress.currentWorld || 1;


    const level =
        progress.currentLevel || 1;


    const points =
        progress.points || 0;


    const coins =
        progress.coins || 0;


    document.getElementById(
        "worldStat"
    ).textContent = world;


    document.getElementById(
        "levelStat"
    ).textContent = level;


    document.getElementById(
        "pointsStat"
    ).textContent = points;


    document.getElementById(
        "coinsStat"
    ).textContent = coins;


    /* XP */

    const totalCompleted =
        progress.completedLevels
            ? progress.completedLevels.length
            : 0;


    const totalLevels = 100;


    const percentage =
        Math.min(
            (totalCompleted / totalLevels) * 100,
            100
        );


    document.getElementById(
        "xpProgress"
    ).style.width =
        `${percentage}%`;


    document.getElementById(
        "levelProgressText"
    ).textContent =
        `${Math.round(percentage)}%`;


    document.getElementById(
        "xpText"
    ).textContent =
        `${points} XP`;
}


/* =========================================================
   WORLD ACCESS
========================================================= */

function isWorldUnlocked(
    worldNumber,
    currentWorld
) {

    return worldNumber <= currentWorld;
}


/* =========================================================
   LEVEL ACCESS
========================================================= */

function isLevelUnlocked(
    worldNumber,
    levelNumber,
    currentWorld,
    currentLevel,
    completedLevels
) {

    const levelId =
        `${worldNumber}-${levelNumber}`;


    if (
        completedLevels.includes(
            levelId
        )
    ) {

        return true;
    }


    if (
        worldNumber < currentWorld
    ) {

        return true;
    }


    if (
        worldNumber > currentWorld
    ) {

        return false;
    }


    return levelNumber <= currentLevel;
}


/* =========================================================
   CREATE WORLDS
========================================================= */

function createWorlds(account) {

    const grid =
        document.getElementById(
            "worldsGrid"
        );


    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    const progress =
        account.progress || {};


    const currentWorld =
        progress.currentWorld || 1;


    const currentLevel =
        progress.currentLevel || 1;


    const completedLevels =
        progress.completedLevels || [];


    worlds.forEach(
        (world, worldIndex) => {

            const worldNumber =
                worldIndex + 1;


            const unlocked =
                isWorldUnlocked(
                    worldNumber,
                    currentWorld
                );


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                `world-card ${
                    unlocked
                        ? ""
                        : "locked"
                }`;


            /* World top */

            const top =
                document.createElement(
                    "div"
                );


            top.className =
                "world-top";


            top.innerHTML = `

                <span class="world-number">
                    WORLD ${worldNumber}
                </span>

                <span class="world-lock">
                    ${
                        unlocked
                            ? "◆"
                            : "🔒"
                    }
                </span>

            `;


            card.appendChild(top);


            /* Title */

            const title =
                document.createElement(
                    "h3"
                );


            title.textContent =
                world.name;


            card.appendChild(title);


            /* Description */

            const description =
                document.createElement(
                    "p"
                );


            description.textContent =
                world.description;


            card.appendChild(description);


            /* Difficulty */

            const difficulty =
                document.createElement(
                    "div"
                );


            difficulty.className =
                "world-difficulty";


            let bars = "";


            for (
                let i = 1;
                i <= 5;
                i++
            ) {

                bars += `

                    <span class="${
                        i <= Math.ceil(
                            world.difficulty / 2
                        )
                            ? "active"
                            : ""
                    }"></span>

                `;
            }


            difficulty.innerHTML = `

                <span class="difficulty-label">
                    Difficulty
                </span>

                <div class="difficulty-bars">
                    ${bars}
                </div>

            `;


            card.appendChild(
                difficulty
            );


            /* Levels */

            const levels =
                document.createElement(
                    "div"
                );


            levels.className =
                "levels";


            for (
                let level = 1;
                level <= 10;
                level++
            ) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.textContent =
                    level;


                const levelUnlocked =
                    unlocked &&
                    isLevelUnlocked(
                        worldNumber,
                        level,
                        currentWorld,
                        currentLevel,
                        completedLevels
                    );


                const levelId =
                    `${worldNumber}-${level}`;


                const completed =
                    completedLevels.includes(
                        levelId
                    );


                if (completed) {

                    button.className =
                        "level-button completed";

                } else if (
                    levelUnlocked
                ) {

                    button.className =
                        "level-button unlocked";

                } else {

                    button.className =
                        "level-button locked";

                }


                if (
                    worldNumber === currentWorld &&
                    level === currentLevel
                ) {

                    button.classList.add(
                        "current"
                    );
                }


                button.addEventListener(
                    "click",
                    () => {

                        if (
                            !levelUnlocked
                        ) {

                            showToast(
                                "Complete the previous level to unlock this one."
                            );

                            return;
                        }


                        openLevelModal(
                            worldNumber,
                            level,
                            world
                        );

                    }
                );


                levels.appendChild(
                    button
                );
            }


            card.appendChild(levels);


            grid.appendChild(card);

        }
    );
}


/* =========================================================
   LEVEL MODAL
========================================================= */

let selectedWorld = 1;
let selectedLevel = 1;


function openLevelModal(
    worldNumber,
    levelNumber,
    world
) {

    selectedWorld =
        worldNumber;


    selectedLevel =
        levelNumber;


    const modal =
        document.getElementById(
            "levelModal"
        );


    const title =
        document.getElementById(
            "modalTitle"
        );


    const description =
        document.getElementById(
            "modalDescription"
        );


    const difficulty =
        document.getElementById(
            "modalDifficulty"
        );


    const reward =
        document.getElementById(
            "modalReward"
        );


    title.textContent =
        `World ${worldNumber} · Level ${levelNumber}`;


    description.textContent =
        world.description;


    const difficultyNames = [
        "Easy",
        "Easy",
        "Normal",
        "Normal",
        "Medium",
        "Medium",
        "Hard",
        "Hard",
        "Expert",
        "Master"
    ];


    difficulty.textContent =
        difficultyNames[
            levelNumber - 1
        ];


    const xp =
        100 +
        (
            (worldNumber - 1) * 50
        ) +
        (
            (levelNumber - 1) * 10
        );


    reward.textContent =
        `${xp} XP`;


    modal.classList.add(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );
}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeLevelModal() {

    const modal =
        document.getElementById(
            "levelModal"
        );


    modal.classList.remove(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );
}


/* =========================================================
   CONTINUE BUTTON
========================================================= */

/* =========================================================
   CONTINUE MISSION
========================================================= */

function setupContinueButton(account) {

    const button =
        document.getElementById(
            "continueButton"
        );


    const title =
        document.getElementById(
            "continueTitle"
        );


    const description =
        document.getElementById(
            "continueDescription"
        );


    if (!button) {
        return;
    }


    const progress =
        account.progress || {};


    const world =
        progress.currentWorld || 1;


    const level =
        progress.currentLevel || 1;


    /* -----------------------------------------
       UPDATE CONTINUE MISSION CARD
    ----------------------------------------- */

    title.textContent =
        `World ${world} · Level ${level}`;


    description.textContent =
        `Continue your cyber security mission in World ${world}, Level ${level}.`;


    /* -----------------------------------------
       CONTINUE BUTTON CLICK
    ----------------------------------------- */

    button.onclick = () => {

        const worldData =
            worlds[
                world - 1
            ];


        if (!worldData) {
            return;
        }


        openLevelModal(
            world,
            level,
            worldData
        );

    };

}


/* =========================================================
   LOGOUT
========================================================= */

function setupLogout() {

    const button =
        document.getElementById(
            "logoutButton"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                LOGIN_KEY
            );


            window.location.href =
                "pages/login.html";

        }
    );
}


/* =========================================================
   MODAL EVENTS
========================================================= */

function setupModal() {

    const close =
        document.getElementById(
            "modalClose"
        );


    const modal =
        document.getElementById(
            "levelModal"
        );


    const launch =
        document.getElementById(
            "launchButton"
        );


    close.addEventListener(
        "click",
        closeLevelModal
    );


    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === modal
            ) {

                closeLevelModal();

            }

        }
    );


    launch.addEventListener(
    "click",
    () => {

        window.location.href =
            `pages/mission.html?world=${selectedWorld}&level=${selectedLevel}`;

    }
);
}


/* =========================================================
   START DASHBOARD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const account =
            checkLogin();


        if (!account) {
            return;
        }


        updatePlayer(account);

        updateStats(account);

        createWorlds(account);

        setupContinueButton(account);

        setupLogout();

        setupModal();

    }
);
// =========================================================
// CYBERQUEST THEME SYSTEM
// =========================================================

const themeToggle =
    document.getElementById("themeToggle");


// =========================================================
// LOAD SAVED THEME
// =========================================================

const savedTheme =
    localStorage.getItem("cyberquest_theme");


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


// =========================================================
// THEME TOGGLE
// =========================================================

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle(
            "light-theme"
        );

        const isLight =
            document.body.classList.contains(
                "light-theme"
            );


        // LIGHT THEME
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


        // DARK THEME
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