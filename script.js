function hideSplash() {
  document.getElementById("splash-wrap").style.display = "none";
}

function adjustCircleSize() {
  const circle = document.getElementById("circle");
  const advisorySticker = document.getElementById("advisory-sticker");
  const eyes = document.getElementById("eyes");

  const minDimension = Math.min(window.innerWidth, window.innerHeight);

  circle.style.width = circle.style.height = `${minDimension}px`;
  //   eyes.style.height = `${minDimension + 150}px`; //new code

  advisorySticker.style.height -= `${minDimension}px`;
  advisorySticker.style.width -= `${minDimension + 40}px`;

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

const pinContainer = document.querySelector(".pin-code");

pinContainer.addEventListener(
  "keyup",
  function (event) {
    const target = event.srcElement;

    const maxLength = parseInt(target.attributes["maxlength"].value, 10);
    const myLength = target.value.length;

    if (myLength >= maxLength) {
      let next = target;
      while ((next = next.nextElementSibling)) {
        if (next == null) break;
        if (next.tagName.toLowerCase() == "input") {
          next.focus();
          break;
        }
      }
    }

    if (myLength === 0) {
      let next = target;
      while ((next = next.previousElementSibling)) {
        if (next == null) break;
        if (next.tagName.toLowerCase() == "input") {
          next.focus();
          break;
        }
      }
    }
  },
  false
);

pinContainer.addEventListener(
  "keydown",
  function (event) {
    var target = event.srcElement;
    target.value = "";
  },
  false
);

const digit1 = document.getElementById("digit1");
const digit2 = document.getElementById("digit2");
const digit3 = document.getElementById("digit3");
const lyricsButton = document.getElementById("lyrics-unlock-button");
const pinDiv = document.getElementById("pin-code");
const heart = document.getElementById("heart");

document.getElementById("lyrics-unlock-button").style.display = "none";

// Add an event listener to check the pin code
digit3.addEventListener("input", checkPinCode);
lyricsButton.addEventListener("click", showLyrics);

function showLyrics() {
  document.getElementById("lyrics").style.visibility = "visible";
  document.getElementById("pin-code").style.display = "none";
}

function checkPinCode() {
  // Check if the pin code is '222'
  if (digit1.value === "0" && digit2.value === "0" && digit3.value === "0") {
    document.getElementById("lyrics-unlock-button").style.display = "";
  } else {
    document.getElementById("lyrics-unlock-button").style.display = "none";
    // Add the shake-animation class to trigger the animation
    heart.classList.add("shake-animation");

    // Remove the class after the animation completes
    setTimeout(function () {
      heart.classList.remove("shake-animation");
    }, 500); // Adjust the time based on your animation duration
  }
}
