document.addEventListener("mousemove", blahajlax)

const bg  = document.querySelector('#background')
const haj = document.querySelector('#blahaj')

function blahajlax (event) {

  let posBg  = bg.getAttribute('value')
  let posHaj = haj.getAttribute('value')

  let hajX   = (window.innerWidth  - event.pageX * posHaj) / 90
  let hajY   = (window.innerHeight - event.pageY * posHaj) / 90
  let bgX    = (window.innerWidth  - event.pageX * posBg) / 70
  let bgY    = (window.innerHeight - event.pageY * posBg) / 70

  bg.style.transform = `translateX(${bgX}px) translateY(${bgY}px)`
  haj.style.transform = `translateX(${hajX}px) translateY(${hajY}px)`

}

document.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.5;
  audio.play();
});
