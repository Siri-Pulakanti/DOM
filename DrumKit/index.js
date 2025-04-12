let v = document.querySelectorAll("button");
for (let i = 0; i < v.length; i++) {
  let buttonText = v[i].innerHTML;
  v[i].addEventListener("click", () => handleButtonClick(buttonText));
}
document.addEventListener("keypress", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function handleButtonClick(buttonText) {
  makeSound(buttonText);
  buttonAnimation(buttonText);
}
function makeSound(buttonText) {
  switch (buttonText) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      const kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
  }
}
function buttonAnimation(buttonText) {
  document.querySelector("." + buttonText).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("." + buttonText).classList.remove("pressed");
  }, 200);
}
