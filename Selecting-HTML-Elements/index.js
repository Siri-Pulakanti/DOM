document.querySelector("a").href =
  "https://chatgpt.com/c/67ec7c9f-9ee0-8006-846d-63233e1fc612";
document.querySelectorAll("li").innerHTML = "D1";
let liArray = document.querySelectorAll("li");
console.log(liArray);
for (let i = 0; i < liArray.length; i++) {
  console.log(liArray[i]);
  liArray[i].innerHTML = "D" + (i + 1);
}
liArray[1].style.color = "red";
document.querySelector("p").style.textDecoration = "underline";
document.querySelector("#third").innerHTML = "r3";
document.getElementById("second").style.color = "blue";

document.getElementsByClassName("sprite")[0].classList.add("teal");
console.log("Before delay");
setTimeout(() => {
  document.querySelector("h2").innerHTML = "<em>Siri</em>";
  document.querySelector("h1").innerHTML = "Dwaraka";
}, 5000); // 5000ms = 5 seconds
