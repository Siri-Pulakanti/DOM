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
  playSound(pressedButton);
  animateButton(pressedButton);
}
