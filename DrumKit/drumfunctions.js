function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  //console.log(audio)

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

};

function removeTransition(e) {
  console.log(e)
  e.target.classList.remove('playing')
}

let keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown', playSound);