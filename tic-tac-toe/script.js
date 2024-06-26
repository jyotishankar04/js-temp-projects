let div1 = document.getElementById("box1");
let div2 = document.getElementById("box2");
let div3 = document.getElementById("box3");
let div4 = document.getElementById("box4");
let div5 = document.getElementById("box5");
let div6 = document.getElementById("box6");
let div7 = document.getElementById("box7");
let div8 = document.getElementById("box8");
let div9 = document.getElementById("box9");

let label = document.getElementById("label");
let parent = document.getElementById("parent");
function togglePlayer() {
  if (label.innerHTML == "X") {
    label.innerHTML = "O";
  } else if (label.innerHTML == "O") {
    label.innerHTML = "X";
  }
}

const buttons = document.querySelectorAll("#parent>button");

function handleClick() {
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      button.innerHTML = label.innerHTML;
      togglePlayer();
      disableButton();
      checkWinner();
    });
  });
}
handleClick();
function disableButton() {
  buttons.forEach(function (button) {
    if (button.innerHTML == "X" || button.innerHTML == "O") {
      button.disabled = true;
    }
  });
}

const winnerCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [6, 4, 2],
];

function checkWinner() {
  winnerCombinations.forEach(function (combination) {
    if (
      buttons[combination[0]].innerHTML == buttons[combination[1]].innerHTML &&
      buttons[combination[1]].innerHTML == buttons[combination[2]].innerHTML &&
      buttons[combination[0]].innerHTML != ""
    ) {
      alert(buttons[combination[0]].innerHTML + " wins!");
    }
  });
}
