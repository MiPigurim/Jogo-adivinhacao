let randomNumber;
let xAttempts;

function initGame() {
  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
}

function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");

    document.querySelector(".screen2 h2").innerText =
      "Acertou em " + xAttempts + " tentativas";
  }
  xAttempts++;
  inputNumber.value = "";
  inputNumber.focus();
}

function restartGame() {
  document.querySelector(".screen1").classList.remove("hide");
  document.querySelector(".screen2").classList.add("hide");

  initGame();
}

document.addEventListener("DOMContentLoaded", function () {
  initGame();
});
