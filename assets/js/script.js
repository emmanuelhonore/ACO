var currentTime = new Date();

var startdefault = new Date();
startdefault.setHours(5,30,0);
var startMorning = new Date();
startMorning.setHours(10,30,0);
var startAfternoon = new Date();
startAfternoon.setHours(12,30,0);
var startEvening = new Date();
startEvening.setHours(17,30,0);
var startNight = new Date();
startNight.setHours(21,30,0);

var $sky = document.getElementById('sky');


if(currentTime < startdefault) {
  // nightsky
  $sky.style.backgroundImage="url(/assets/imgs/aco-sky-night.jpg)";
}
else if(currentTime >= startdefault && currentTime < startMorning ) {
  // do nothing
}
else if(currentTime >= startMorning && currentTime < startAfternoon ) {
  // morning sky
  $sky.style.backgroundImage="url(/assets/imgs/aco-sky-morning.jpg)";
}
else if(currentTime >= startAfternoon && currentTime < startEvening ) {
  // afternoon sky
  $sky.style.backgroundImage="url(/assets/imgs/aco-sky-afternoon.jpg)";
}
else if(currentTime >= startEvening && currentTime < startNight ) {
  // do nothing
}
else if(currentTime >= startNight) {
  // night sky
  $sky.style.backgroundImage="url(/assets/imgs/aco-sky-night.jpg)";
}

// toggle trailer
var $trailer = document.getElementById('player');
var $trailerToggle = document.getElementById('player-toggle');

$trailerToggle.addEventListener('click', Event => {
  $trailer.classList.add('enabled');
});