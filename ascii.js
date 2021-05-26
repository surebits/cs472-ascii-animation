let animation = "BLANK";
let frames = [];
let currentFrameIndex = 0;

let interval = null;

const [animationTypeSelect] = document.getElementsByTagName("select");
const [startButton, stopButton] = document.getElementsByTagName("button");
const textArea = document.getElementById("container");

textArea.onchange = function(e) {
    
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
    clearInterval(interval);
    interval = setInterval(startAnimation, 250);
  }
};

stopButton.onclick = function () {
  clearInterval(interval);
  textArea.innerHTML = animation;
};
