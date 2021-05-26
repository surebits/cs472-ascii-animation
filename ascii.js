'use strict';

let animation = "BLANK";
let frames = [];
let currentFrameIndex = 0;
let interval = null;
let speed = 250;

const [animationTypeSelect, fontSizeSelect] = document.getElementsByTagName("select");
const [startButton, stopButton] = document.getElementsByTagName("button");
const textArea = document.getElementById("container");
const checkBox = document.getElementById("turbo");

stopButton.disabled = true;

turbo.onchange= function(e) {
    speed = e.target.checked ? 50 : 250;
}

fontSizeSelect.onchange = function(e) {
    textArea.style.fontSize = e.target.value;
}

animationTypeSelect.onchange = function (e) {
  animation = ANIMATIONS[e.target.value];  
  frames = animation.split("=====\n");
  textArea.innerHTML = frames.join("");
};

function startAnimation() {
  const length = frames.length;
  const notEnd = currentFrameIndex < length;
  const frame = frames[notEnd ? currentFrameIndex++ : 0];
  textArea.innerHTML = frame;

  if (!notEnd) {
    currentFrameIndex = 0;
  }
}

startButton.onclick = function () {
  if (animation != "BLANK") {
    stopButton.disabled = false;
    startButton.disabled = true;
    animationTypeSelect.disabled = true;
    
    clearInterval(interval);
    interval = setInterval(startAnimation, speed);    
  }
};

stopButton.onclick = function () {
  clearInterval(interval);
  textArea.innerHTML = frames.join("");
  stopButton.disabled = true;
  startButton.disabled = false;
  animationTypeSelect.disabled = false;
};
