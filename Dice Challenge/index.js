let count = 0,
  player1Score = 0,
  player2Score = 0;
let p1Name = "Player-1";
let p2Name = "Player-2";

takeUserDet();
document
  .querySelector("#roll-btn")
  .addEventListener("click", handleRollButtonClick);
document
  .querySelector("#reply-btn")
  .addEventListener("click", handleReplayClick);
function handleReplayClick() {
  document.querySelector("#roll-btn").classList.toggle("hide-element");
  document.querySelector("#reply-btn").classList.toggle("hide-element");
  player1Score = 0;
  player2Score = 0;
  count = 0;
  document.querySelector("#p1").textContent = p1Name;
  document.querySelector("#p2").textContent = p2Name;
  document.querySelector("h1").innerHTML = "5-Roll Dice Battle";
  document.querySelector("#turn").innerHTML = "You have 5 turns left";
  takeUserDet();
}
function takeUserDet() {
  p1Name = prompt("Please enter Player-1's Name:");

  p2Name = prompt("Please enter Player-2's Name:");

  if (p1Name.trim().length === 0) {
    p1Name = "Player-1";
  }
  if (p2Name.trim().length === 0) {
    p2Name = "Player-2";
  }
  document.querySelector("#p1").textContent = p1Name;
  document.querySelector("#p2").textContent = p2Name;
}
function handleRollButtonClick() {
  let randomInt = Math.floor(Math.random() * 6 + 1);
  player1Score = player1Score + randomInt;

  let imgpath = "./images/dice" + randomInt + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", imgpath);
  let randomInt1 = Math.floor(Math.random() * 6 + 1);
  player2Score = player2Score + randomInt1;
  let imgpath1 = "./images/dice" + randomInt1 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", imgpath1);

  count = count + 1;
  console.log("The Button is clicked", count, "number of times");
  document.querySelector("#turn").innerHTML =
    "You have " + (5 - count) + " turns left";
  console.log(p1Name + " score: " + player1Score);
  document.querySelector("#p1").textContent =
    p1Name + " score: " + player1Score;
  document.querySelector("#p2").textContent =
    p2Name + " score: " + player2Score;

  if (count == 5) {
    document.querySelector("#turn").innerHTML = "Game is over";
    if (player1Score > player2Score) {
      document.querySelector("h1").innerHTML = p1Name + " won";
    } else if (player1Score == player2Score) {
      document.querySelector("h1").innerHTML = "It's a Draw";
    } else {
      document.querySelector("h1").innerHTML = p2Name + " won";
    }
    document.querySelector("#roll-btn").classList.toggle("hide-element");
    document.querySelector("#reply-btn").classList.toggle("hide-element");
  }
}
