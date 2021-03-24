
// This is a function for switch------------------------------------------------------

const switchNotes = document.querySelector('.switch_notes');
const switchLatters = document.querySelector('.switch_latters');
let whiteButtons = document.querySelectorAll('.white_key');
let blackButtons = document.querySelectorAll('.black_key');

switchNotes.addEventListener('click', switchNote);
switchLatters.addEventListener('click', switchLatter);


function switchNote () {
    
    for(let i = 0; i < whiteButtons.length; i++) {
        whiteButtons[i].classList.add('white_keyChange');
        whiteButtons[i].classList.remove('white_key');
        
    }
    for(let i = 0; i < blackButtons.length; i++) {
        blackButtons[i].classList.add('black_keyChange');
        blackButtons[i].classList.remove('black_key');
        
    }
}
function switchLatter () {
    
    for(let i = 0; i < whiteButtons.length; i++) {
        whiteButtons[i].classList.add('white_key');
        whiteButtons[i].classList.remove('white_keyChange');
        
    }
    for(let i = 0; i < blackButtons.length; i++) {
        blackButtons[i].classList.add('black_key');
        blackButtons[i].classList.remove('black_keyChange');
        
    }
}
// This is a function for sound------------------------------------------------------
const PIANOWHITEBTN = document.querySelectorAll('.white_key');
const PIANOBLACKBTN = document.querySelectorAll('.black_key');
const PIANOWHITE = document.getElementById('white');
const PIANOBLACK = document.getElementById('black');

const startSoundNow = (event) => {
    event.target.classList.add('active');
    const SOUND = document.getElementById(event.target.dataset.note);
    SOUND.currentTime = 0;
    SOUND.play();
}
const stopSoundNow = (event) => {
    event.target.classList.remove('active');
}

const startSound = (event) => {
    event.target.classList.add('active');
    const SOUND = document.getElementById(event.target.dataset.note);
    SOUND.currentTime = 0;
    SOUND.play();
    PIANOWHITEBTN.forEach((elem) => {
    elem.addEventListener('mouseover', startSoundNow);
    elem.addEventListener('mouseout', stopSoundNow);
    })
}

const stopSound = () => {
    PIANOWHITEBTN.forEach((elem) => {
    elem.classList.remove('active');
    elem.removeEventListener('mouseover', startSoundNow);
    elem.removeEventListener('mouseout', stopSoundNow);
    })
}

PIANOWHITE.addEventListener('mousedown', startSound, false);
PIANOWHITE.addEventListener('mouseup', stopSound);


const startSoundNowB = (eventb) => {
    eventb.target.classList.add('active');
    const SOUND = document.getElementById(eventb.target.dataset.note);
    SOUND.currentTime = 0;
    SOUND.play();
}
const stopSoundNowB = (eventb) => {
    eventb.target.classList.remove('active');
}

const startSoundB = (eventb) => {
    eventb.target.classList.add('active');
    const SOUND = document.getElementById(eventb.target.dataset.note);
    SOUND.currentTime = 0;
    SOUND.play();
    PIANOBLACKBTN.forEach((elemb) => {
    elemb.addEventListener('mouseover', startSoundNowB);
    elemb.addEventListener('mouseout', stopSoundNowB);
    })
}

const stopSoundB = () => {
    PIANOBLACKBTN.forEach((elemb) => {
    elemb.classList.remove('active');
    elemb.removeEventListener('mouseover', startSoundNowB);
    elemb.removeEventListener('mouseout', stopSoundNowB);
    })
}

PIANOBLACK.addEventListener('mousedown', startSoundB, false);
PIANOBLACK.addEventListener('mouseup', stopSoundB);
