//calculateMate
function calculateMate() {
  let inputOperation = document.getElementById("theOperation").value;
  let calculatorProcess = eval(inputOperation);
  document.getElementById("theOperation").value = calculatorProcess;

}

function addOperation() {
  document.getElementById("resultButton").disabled = false;
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "+";
 
}

function subtractOperation() {
  document.getElementById("resultButton").disabled = false;
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "-";
 
}

function multiplyOperation() {
  document.getElementById("resultButton").disabled = false;
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "*";
 
}

function divideOperation() {
  document.getElementById("resultButton").disabled = false;
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "/";
 
}

function moduloOperation() {
  document.getElementById("resultButton").disabled = false;
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "%";
 
}

//the numbers function

function numberOne() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "1";
 
}

function numberTwo() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "2";
 
}

function numberThree() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "3";
 
}

function numberFour() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "4";
 
}

function numberFive() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "5";
 
}

function numberSix() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "6";
 
}

function numberSeven() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "7";
 
}

function numberEight() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "8";
 
}

function numberNine() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "9";
 
}

function numberZero() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "0";
 
}


//clear All
function clearAll() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value = "";
}

//clear one last character
function clearOne() {learn
  let insertAdd = document.getElementById("theOperation");
  
 
}