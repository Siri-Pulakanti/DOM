document.querySelector("button").addEventListener("click", handleButtonClick);
function handleButtonClick() {
  let randomInt = Math.floor(Math.random() * 6 + 1);
  let imgpath = "./images/dice" + randomInt + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", imgpath);
  let randomInt1 = Math.floor(Math.random() * 6 + 1);
  let imgpath1 = "./images/dice" + randomInt1 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", imgpath1);
  if (randomInt > randomInt1) {
    document.querySelector("h1").innerHTML = "Player1 won";
  } else if (randomInt == randomInt1) {
    document.querySelector("h1").innerHTML = "It's a Draw";
  } else {
    document.querySelector("h1").innerHTML = "Player2 won";
  }

  console.log("Button Clicked");
}
