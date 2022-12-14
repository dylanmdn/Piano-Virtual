const pianoKeys = document.querySelectorAll(".piano-keys .key");
const VolumePiano = document.querySelector(".volume-option .slider");
const showKeys = document.querySelector(".show-option .toggle-switch");



let allkeys = [];
let audio = new Audio();

function playTune(key) {
    audio.src = `tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");

    setInterval(() => {
        clickedKey.classList.remove("active");
    }, 180)
}

pianoKeys.forEach(
    key => {
        allkeys.push(key.dataset.key);
        key.addEventListener("click",
            () =>
                playTune(key.dataset.key));


    }
);

function pressedKey(e) {
    if (allkeys.includes(e.key)) {
        playTune(e.key);
    }
}

function handleVolume(e) {
    audio.volume = e.target.value;
}

document.addEventListener("keydown", pressedKey);
VolumePiano.addEventListener("input", handleVolume);


function handleShowKeys() {
    pianoKeys.forEach(
        key =>
            key.classList.toggle("hide"),
    );
}

showKeys.addEventListener("input", handleShowKeys);
