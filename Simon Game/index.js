let isGameStarted = false;
let gameSequence = [];
let userSequence = [];
let userClickCount = 0;
document.addEventListener("keypress", startGame);
let allBoxColors = ["red", "blue", "green", "yellow"];
function playSound(pressedButton) {
  let audio = new Audio("sounds/" + pressedButton + ".mp3");
  audio.play();
}
function animateButton(pressedButton) {
  document.getElementById(pressedButton).classList.add("pressed");
  setTimeout(() => {
    document.getElementById(pressedButton).classList.remove("pressed");
  }, 200);
}
let k = document.querySelectorAll(".box");
for (let i = 0; i < k.length; i++) {
  let pressedBtnId = k[i].id;
  k[i].addEventListener("click", () => handleBoxClick(pressedBtnId));
}
function handleBoxClick(pressedButton) {
  if (isGameStarted == true) {
    playSound(pressedButton);
    animateButton(pressedButton);
    userSequence.push(pressedButton);
    if (userSequence[userClickCount] != gameSequence[userClickCount]) {
      playSound("wrong");
      document.querySelector("h1").innerHTML =
        "Game Over!!! Your score is " +
        gameSequence.length +
        " Press any key to start";

      userSequence = [];
      gameSequence = [];
      userClickCount = 0;

      animateBody();
      isGameStarted = false;
    } else {
      userClickCount++;
      if (gameSequence.length == userClickCount) {
        userSequence = [];
        userClickCount = 0;
        setTimeout(() => {
          selectRandomBox();
        }, 500);
      }
    }

    console.log(userSequence);
  }
}
function startGame() {
  if (isGameStarted == false) {
    isGameStarted = true;
    selectRandomBox();
    console.log("Starting Game");
  }
}
function selectRandomBox() {
  let randomNum = Math.floor(Math.random() * 4);
  let selectedBox = allBoxColors[randomNum];
  playSound(selectedBox);
  animateButton(selectedBox);
  gameSequence.push(selectedBox);
  document.querySelector("h1").innerHTML = "Level - " + gameSequence.length;
}
function animateBody() {
  document.querySelector("body").classList.add("flash");
  setTimeout(() => {
    document.querySelector("body").classList.remove("flash");
  }, 200);
}
