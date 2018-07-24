//calculateMate
function calculateMate() {
  let inputOperation = document.getElementById("theOperation").value;
  let calculatorProcess = eval(inputOperation);
  document.getElementById("results").innerHTML = calculatorProcess;
  event.preventDefault();

}

function addOperation() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "+";
  event.preventDefault();
}

function subtractOperation() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "-";
  event.preventDefault();
}

function divideOperation() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "/";
  event.preventDefault();
}

function moduloOperation() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "%";
  event.preventDefault();
}

//the numbers function

function numberOne() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "1";
  event.preventDefault();
}

function numberTwo() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "2";
  event.preventDefault();
}

function numberThree() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "3";
  event.preventDefault();
}

function numberFour() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "4";
  event.preventDefault();
}

function numberFive() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "5";
  event.preventDefault();
}

function numberSix() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "6";
  event.preventDefault();
}

function numberSeven() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "7";
  event.preventDefault();
}

function numberEight() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "8";
  event.preventDefault();
}

function numberNine() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "9";
  event.preventDefault();
}