function clearAll() {
  document.querySelector("input").value = "";
}
function append(value) {
  document.querySelector("input").value += value;
}
function solution() {
  try {
    let k = document.querySelector("input").value;
    console.log(k);
    let result = eval(k);

    document.querySelector("input").value = result;
  } catch {
    document.querySelector("input").value = "Error";
  }
}
