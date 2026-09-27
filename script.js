const room = document.querySelector(".room");
const unlockGlow = document.getElementById("unlockGlow");

const lamp = document.getElementById("lamp");
const lampMessage = document.getElementById("lampMessage");

let lampOn = false;

lamp.addEventListener("click", () => {

    lampOn = !lampOn;

    if (lampOn) {
        lampMessage.classList.add("show");
        lamp.classList.add("lamp-on");
    } else {
        lampMessage.classList.remove("show");
        lamp.classList.remove("lamp-on");
    }

});
const letter = document.getElementById("letter");
const letterOverlay = document.getElementById("letterOverlay");
const closeLetter = document.getElementById("closeLetter");

letter.addEventListener("click", () => {
    letterOverlay.classList.add("show");
});

closeLetter.addEventListener("click", () => {
    letterOverlay.classList.remove("show");
});

letterOverlay.addEventListener("click", (event) => {
    if (event.target === letterOverlay) {
        letterOverlay.classList.remove("show");
    }
});
// MOOD SECTION

const headphones = document.getElementById("headphones");
const moodOverlay = document.getElementById("moodOverlay");
const closeMood = document.getElementById("closeMood");
const moodButtons = document.querySelectorAll(".mood-buttons button");
const moodMessage = document.getElementById("moodMessage");

headphones.addEventListener("click", () => {
    moodOverlay.classList.add("show");
});

closeMood.addEventListener("click", () => {
    moodOverlay.classList.remove("show");
    moodMessage.classList.remove("show");
});

moodOverlay.addEventListener("click", (event) => {
    if (event.target === moodOverlay) {
        moodOverlay.classList.remove("show");
        moodMessage.classList.remove("show");
    }
});

moodButtons.forEach(button => {

    button.addEventListener("click", () => {

        const message = button.dataset.message;

        moodMessage.textContent = message;

        moodMessage.classList.add("show");

    });

});
// BOOKSHELF / LITTLE THINGS

const bookshelf = document.getElementById("bookshelf");
const memoryOverlay = document.getElementById("memoryOverlay");
const closeMemory = document.getElementById("closeMemory");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");
const nextMemory = document.getElementById("nextMemory");

const memories = [
    {
        title: "The little things",
        text: "Sometimes the smallest things about someone are the ones that stay in your mind the longest. CHAracters can hide in plain sight."
    },
    {
        title: "A small reminder",
        text: "You don't always realise how much your presence can brighten an ordinary day. The little details matter SHouldn't they?"
    },
    {
        title: "One more thing...",
        text: "There are probably a hundred things that make you special. Sometimes the answer is hidden in plain sight, if you look MISHief-fully enough. 👀"
    }
];

let currentMemory = 0;

function showMemory(index) {

    currentMemory = index;

    memoryTitle.textContent = memories[index].title;

   const clues = [
    "Maybe the beginning of something holds a tiny secret...",
    "Sometimes a few letters in the middle are all you need...",
    "And sometimes the answer is hiding in plain sight. 👀"
];

memoryText.textContent =
    memories[index].text + "\n\n" + clues[index];

    memoryOverlay.classList.add("show");
}

document.querySelectorAll(".shelf-book").forEach((book, index) => {

    book.addEventListener("click", () => {
        showMemory(index);
    });

});

nextMemory.addEventListener("click", () => {

    currentMemory++;

    if (currentMemory >= memories.length) {
        currentMemory = 0;
    }

    showMemory(currentMemory);
});

closeMemory.addEventListener("click", () => {
    memoryOverlay.classList.remove("show");
});

memoryOverlay.addEventListener("click", (event) => {

    if (event.target === memoryOverlay) {
        memoryOverlay.classList.remove("show");
    }

});
// SECRET PLANT

const plant = document.getElementById("plant");
const secretNote = document.getElementById("secretNote");

plant.addEventListener("click", () => {

    const isOpening = !secretNote.classList.contains("show");

    secretNote.classList.toggle("show");

    if (isOpening) {
        plant.classList.remove("secret-active");

        void plant.offsetWidth;

        plant.classList.add("secret-active");

        setTimeout(() => {
            plant.classList.remove("secret-active");
        }, 700);
    }

});
// SECRET BOX

const secretBox = document.getElementById("secretBox");
const boxOverlay = document.getElementById("boxOverlay");
const closeBox = document.getElementById("closeBox");

const passwordInput = document.getElementById("passwordInput");
const unlockButton = document.getElementById("unlockButton");

const wrongPassword = document.getElementById("wrongPassword");
const finalMessage = document.getElementById("finalMessage");

const secretPassword = "chashmish";

secretBox.addEventListener("click", () => {

    boxOverlay.classList.add("show");

});

closeBox.addEventListener("click", () => {

    boxOverlay.classList.remove("show");

});

boxOverlay.addEventListener("click", (event) => {

    if (event.target === boxOverlay) {
        boxOverlay.classList.remove("show");
    }

});

unlockButton.addEventListener("click", () => {

    const enteredPassword =
        passwordInput.value.trim().toLowerCase();

    if (enteredPassword === secretPassword) {
    wrongPassword.classList.remove("show");

    document.querySelector(".box-popup").classList.add("unlocking");

        passwordInput.style.display = "none";
        unlockButton.style.display = "none";

        room.classList.add("final-reveal");

        setTimeout(() => {
            finalMessage.classList.add("show");
        }, 700);

   } else {
    wrongPassword.classList.add("show");

    const popup = document.querySelector(".box-popup");

    popup.animate(
        [
            { transform: "scale(1) translateX(0)" },
            { transform: "scale(1) translateX(-8px)" },
            { transform: "scale(1) translateX(8px)" },
            { transform: "scale(1) translateX(-6px)" },
            { transform: "scale(1) translateX(6px)" },
            { transform: "scale(1) translateX(0)" }
        ],
        {
            duration: 450,
            easing: "ease-in-out"
        }
    );
}
});

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        unlockButton.click();
    }

});
// BACKGROUND MUSIC
const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

bgMusic.volume = 0.18;

musicButton.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicButton.textContent = "🔊";
        musicButton.classList.add("playing");
    } else {
        bgMusic.pause();
        musicButton.textContent = "🎵";
        musicButton.classList.remove("playing");
    }
});
// =========================
// ENTRY PASSWORD
// =========================

const entryScreen = document.getElementById("entryScreen");
const entryPassword = document.getElementById("entryPassword");
const entryButton = document.getElementById("entryButton");
const entryError = document.getElementById("entryError");
const entryCard = document.querySelector(".entry-card");

const entrySecret = "0101";

function unlockEntry() {

    const enteredPassword =
        entryPassword.value.trim();

    if (enteredPassword === entrySecret) {

        entryError.classList.remove("show");

        entryScreen.classList.add("hidden");

    } else {

        entryError.classList.add("show");

        entryCard.classList.remove("shake");

        void entryCard.offsetWidth;

        entryCard.classList.add("shake");

        entryPassword.value = "";
        entryPassword.focus();
    }
}

entryButton.addEventListener("click", unlockEntry);

entryPassword.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        unlockEntry();
    }

});