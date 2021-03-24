const SOUND = document.querySelectorAll('.sounds');
const BUTTON = document.getElementById('buttons');


const startPlayNow = (event) => {
    event.target.classList.add('active');
    const SOUND = document.getElementById(event.target.dataset.sound);
    SOUND.currentTime = 0;
    SOUND.play();
};
const stopPlayNow = (event) => {
    event.target.classList.remove('active');
    const SOUND = document.getElementById(event.target.dataset.sound);
    SOUND.currentTime = 0;
    SOUND.stop();
};

BUTTON.addEventListener('mousedown', startPlayNow);
BUTTON.addEventListener('mouseup', stopPlayNow);