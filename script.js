function hideSplash() {
  document.getElementById("splash-wrap").style.display = "none";
}

function adjustCircleSize() {
  const circle = document.getElementById("circle");
  const advisorySticker = document.getElementById("advisory-sticker");

  const minDimension = Math.min(window.innerWidth, window.innerHeight);

  circle.style.width = circle.style.height = `${minDimension}px`;
  advisorySticker.style.height -= `${minDimension}px`;

  const background = document.getElementById("hero-background");

  if (window.innerWidth < window.innerHeight)
    background.style.height = `${window.innerWidth}px`;
  else background.style.height = `${circle.style.width + 5}px`;
}

window.onload = function () {
  setTimeout(hideSplash, 3000);
  adjustCircleSize();
};

addEventListener("resize", (event) => {
  adjustCircleSize();
});

onresize = (event) => {
  adjustCircleSize();
};
