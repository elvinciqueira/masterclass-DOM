const keys = document.querySelectorAll('.key');

function playNote(event) {
  let audioKeyCode = getKeyCode(event);

  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);
  const isKeyExists = key;

  if (!isKeyExists) return;

  addPlayingClass(key);
  playAudio(audioKeyCode);
}

function addPlayingClass(key) {
  key.classList.add('playing');
}

function removePlayginClass(event) {
  event.target.classList.remove('playing');
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);

  audio.currentTime = 0;
  audio.play();
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === 'keydown';

  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }

  return keyCode;
}

function registerEvents() {
  window.addEventListener('keydown', playNote);

  keys.forEach(key => {
    key.addEventListener('click', playNote);
    key.addEventListener('transitionend', removePlayginClass);
  });
}

window.addEventListener('load', registerEvents);

