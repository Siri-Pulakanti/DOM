let count = 0,
  player1Score = 0,
  player2Score = 0;
document.querySelector("button").addEventListener("click", handleButtonClick);
function handleButtonClick() {
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
  document.querySelector("#p1").textContent = "Player-1 score: " + player1Score;

  document.querySelector("#p2").textContent = "Player-2 score: " + player2Score;

  if (count == 5) {
    count = 0;
    document.querySelector("#turn").innerHTML = "Game is over";
    if (player1Score > player2Score) {
      document.querySelector("h1").innerHTML = "Player-1 won";
    } else if (player1Score == player2Score) {
      document.querySelector("h1").innerHTML = "It's a Draw";
    } else {
      document.querySelector("h1").innerHTML = "Player-2 won";
    }
    ß;
  }
}
