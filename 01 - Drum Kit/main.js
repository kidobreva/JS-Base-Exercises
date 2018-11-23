function startPlaying(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!sound) {        
            return;
        } 
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');   
}

function stopPlaying(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(key && key.classList.contains('playing')) {
        key.classList.remove('playing');
    }    
}

const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', startPlaying);
window.addEventListener('keyup', stopPlaying);

