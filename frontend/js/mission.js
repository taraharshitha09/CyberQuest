const ACCOUNT_KEY = "cyberquest_account";
const LOGIN_KEY = "cyberquest_logged_in";


/* -----------------------------------------
   GET ACCOUNT
----------------------------------------- */

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


/* -----------------------------------------
   SAVE ACCOUNT
----------------------------------------- */

function saveAccount(account) {

    localStorage.setItem(
        ACCOUNT_KEY,
        JSON.stringify(account)
    );
}


/* -----------------------------------------
   CHECK LOGIN
----------------------------------------- */

const loggedIn =
    localStorage.getItem(LOGIN_KEY);

const account =
    getAccount();


if (loggedIn !== "true" || !account) {

    window.location.href =
        "login.html";
}


/* -----------------------------------------
   GET LEVEL FROM URL
----------------------------------------- */

const params =
    new URLSearchParams(window.location.search);

const worldNumber =
    Number(params.get("world")) || 1;

const levelNumber =
    Number(params.get("level")) || 1;


const missionKey =
    `${worldNumber}-${levelNumber}`;


const mission =
    missions[missionKey];


/* -----------------------------------------
   ELEMENTS
----------------------------------------- */

const worldLabel =
    document.getElementById("worldLabel");

const levelNumberElement =
    document.getElementById("levelNumber");

const missionTitle =
    document.getElementById("missionTitle");

const difficulty =
    document.getElementById("difficulty");

const reward =
    document.getElementById("reward");

const missionDescription =
    document.getElementById("missionDescription");

const question =
    document.getElementById("question");

const optionsContainer =
    document.getElementById("options");

const submitButton =
    document.getElementById("submitButton");

const resultMessage =
    document.getElementById("resultMessage");
    const nextMissionBox =
    document.getElementById("nextMissionBox");

const nextMissionButton =
    document.getElementById("nextMissionButton");

const completionTitle =
    document.getElementById("completionTitle");

const completionText =
    document.getElementById("completionText");

const backButton =
    document.getElementById("backButton");
    const timerElement =
    document.getElementById("timer");

const livesElement =
    document.getElementById("lives");

const hintButton =
    document.getElementById("hintButton");

const hintStatus =
    document.getElementById("hintStatus");

const hintMessage =
    document.getElementById("hintMessage");

    let timeLeft = 120; // 2 minutes

let chancesLeft = 3;

let timerInterval = null;

let missionFinished = false;

let hintUsed = false;

function useHint() {

    if (missionFinished) {
        return;
    }

    if (hintUsed) {
        return;
    }

    if (!mission.hint) {
        return;
    }

    hintMessage.textContent =
        mission.hint;

    hintMessage.classList.add("show");

    hintUsed = true;

    hintStatus.textContent =
        "USED";

    hintButton.textContent =
        "HINT USED";

    hintButton.disabled = true;
}
if (hintButton) {
    hintButton.addEventListener(
        "click",
        useHint
    );
}

function startTimer() {

    updateTimerDisplay();

    timerInterval =
        setInterval(() => {

            if (missionFinished) {
                clearInterval(timerInterval);
                return;
            }

            timeLeft--;

            updateTimerDisplay();

            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                missionFinished = true;

                handleTimeUp();
            }

        }, 1000);
}
function updateTimerDisplay() {


    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    timerElement.classList.remove(
        "timer-warning",
        "timer-danger"
    );


    if (timeLeft <= 30) {

        timerElement.classList.add(
            "timer-danger"
        );

    } else if (timeLeft <= 60) {

        timerElement.classList.add(
            "timer-warning"
        );

    }
}
function updateLivesDisplay() {

    const fullLives =
        "❤️ ".repeat(chancesLeft);

    const emptyLives =
        "🖤 ".repeat(3 - chancesLeft);

    livesElement.textContent =
        `${fullLives}${emptyLives}`.trim();
}
function handleTimeUp() {

    resultMessage.textContent =
        "TIME'S UP! Mission failed.";

    resultMessage.className =
        "result-message error";

    submitButton.disabled = true;

    document
        .querySelectorAll(".option")
        .forEach(option => {
            option.disabled = true;
        });
}

/* -----------------------------------------
   LOAD MISSION
----------------------------------------- */

if (!mission) {

    missionTitle.textContent =
        "Mission Coming Soon";

    missionDescription.textContent =
        "This mission has not been added yet.";

    question.textContent =
        "Please return to the dashboard.";

    submitButton.disabled = true;

} else {

    worldLabel.textContent =
        `WORLD ${mission.world}`;

    levelNumberElement.textContent =
        mission.level;

    missionTitle.textContent =
        mission.title;

    difficulty.textContent =
        mission.difficulty;

    reward.textContent =
        `+${mission.reward} XP`;

    missionDescription.textContent =
        mission.description;

    question.textContent =
        mission.question;


    /* OPTIONS */

    mission.options.forEach(
        (optionText, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "option";

            button.textContent =
                `${String.fromCharCode(65 + index)}. ${optionText}`;

            button.dataset.index =
                index;


            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(".option")
                        .forEach(option => {

                            option.classList.remove(
                                "selected"
                            );

                        });


                    button.classList.add(
                        "selected"
                    );

                }
            );


            optionsContainer.appendChild(
                button
            );

        }
    );
    updateLivesDisplay();
    startTimer();

}


/* -----------------------------------------
   SUBMIT ANSWER
----------------------------------------- */

submitButton.addEventListener(
    "click",
    () => {

        if (!mission) {
            return;
        }


        const selected =
            document.querySelector(
                ".option.selected"
            );


        if (!selected) {

            resultMessage.textContent =
                "Please select an answer first.";

            resultMessage.className =
                "result-message error";

            return;
        }


        const selectedAnswer =
            Number(selected.dataset.index);


        /* WRONG ANSWER */

       if (selectedAnswer !== mission.answer) {

    chancesLeft--;

    updateLivesDisplay();

    selected.classList.add("wrong");

    resultMessage.className =
        "result-message error";


    if (chancesLeft <= 0) {

        missionFinished = true;

        clearInterval(timerInterval);

        resultMessage.textContent =
            "MISSION FAILED! You used all 3 chances.";

        submitButton.disabled = true;

        document
            .querySelectorAll(".option")
            .forEach(option => {
                option.disabled = true;
            });

        return;
    }


    resultMessage.textContent =
        `Wrong answer! ${chancesLeft} chance${chancesLeft === 1 ? "" : "s"} remaining.`;

    return;
}


        /* CORRECT ANSWER */
        missionFinished = true;
clearInterval(timerInterval);

        selected.classList.remove(
            "selected"
        );

        selected.classList.add(
            "correct"
        );


        resultMessage.textContent =
            `Correct! +${mission.reward} XP`;

        resultMessage.className =
            "result-message success";


        /* Prevent multiple rewards */

        submitButton.disabled = true;

        document
            .querySelectorAll(".option")
            .forEach(option => {

                option.disabled = true;

            });


        completeMission();

    }
);


/* -----------------------------------------
   COMPLETE MISSION
----------------------------------------- */
/* -----------------------------------------
   COMPLETE MISSION
----------------------------------------- */

async function completeMission() {

    const progress =
        account.progress || {};

    if (!progress.completedLevels) {
        progress.completedLevels = [];
    }

    const levelId =
        `${worldNumber}-${levelNumber}`;

    const alreadyCompleted =
        progress.completedLevels.includes(levelId);


    /* ---------------------------------
       FIRST COMPLETION ONLY
    --------------------------------- */

    if (!alreadyCompleted) {

        try {

            /* SEND COMPLETION TO BACKEND */

          const response = await fetch(
    "https://cyberquest-nx18.onrender.com/api/progress/complete",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        userId: account.userId,

                        worldNumber: worldNumber,

                        levelNumber: levelNumber,

                        xp: mission.reward,

                        coins: mission.coins

                    })
                }
            );


            const result =
                await response.json();


            /* BACKEND ERROR */

            if (!response.ok) {

                throw new Error(result);

            }


            /* ---------------------------------
               SYNC FRONTEND WITH DATABASE
            --------------------------------- */

            progress.completedLevels.push(
                levelId
            );

            progress.points =
                result.points;

            progress.coins =
                result.coins;

            progress.currentWorld =
                result.currentWorld;

            progress.currentLevel =
                result.currentLevel;


            account.progress =
                progress;


            saveAccount(account);


        } catch (error) {

            console.error(
                "Progress save failed:",
                error
            );

            resultMessage.textContent =
                "Could not save progress. Please try again.";

            resultMessage.className =
                "result-message error";

            return;

        }

    }


    /* ---------------------------------
       SHOW NEXT MISSION
    --------------------------------- */

    if (levelNumber < 10) {

        const nextLevel =
            levelNumber + 1;

        completionTitle.textContent =
            "MISSION COMPLETE!";

        completionText.textContent =
            `Excellent work! Level ${nextLevel} is now unlocked.`;

        nextMissionButton.textContent =
            `NEXT LEVEL ${nextLevel} →`;

        nextMissionButton.onclick = () => {

            window.location.href =
                `mission.html?world=${worldNumber}&level=${nextLevel}`;

        };

    } else {

        /* WORLD COMPLETE */

        if (worldNumber < 10) {

            const nextWorld =
                worldNumber + 1;

            completionTitle.textContent =
                "WORLD COMPLETE!";

            completionText.textContent =
                `Amazing! You completed all 10 missions in World ${worldNumber}.`;

            nextMissionButton.textContent =
                "NEXT WORLD →";

            nextMissionButton.onclick = () => {

                window.location.href =
                    `mission.html?world=${nextWorld}&level=1`;

            };

        } else {

            /* ALL 100 LEVELS COMPLETED */

            completionTitle.textContent =
                "CYBERQUEST COMPLETE!";

            completionText.textContent =
                "You completed all 100 missions! You are a Cyber Mastermind.";

            nextMissionButton.textContent =
                "BACK TO DASHBOARD →";

            nextMissionButton.onclick = () => {

                window.location.href =
                    "../dashboard.html";

            };

        }

    }


    /* SHOW NEXT MISSION BOX */

    nextMissionBox.classList.add("show");

}

/* -----------------------------------------
   BACK TO DASHBOARD
----------------------------------------- */

backButton.addEventListener(
    "click",
    () => {

        window.location.href =
            "../dashboard.html";

    }
);
// =========================================================
// CYBERQUEST THEME SYSTEM - MISSION PAGE
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
