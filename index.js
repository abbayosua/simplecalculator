//calculateMate
function calculateMate() {
  enableAllOperator()

  let inputOperation = document.getElementById("theOperation").value;
  let calculatorProcess = eval(inputOperation);
  document.getElementById("theOperation").value = calculatorProcess;

}

function addOperation() {
  disableAllOperator();

  document.getElementById("resultButton").disabled = false;
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "+";
 
}

function subtractOperation() {
  disableAllOperator();

  document.getElementById("resultButton").disabled = false;
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "-";
 
}

function multiplyOperation() {
  disableAllOperator();

  document.getElementById("resultButton").disabled = false;
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "*";
 
}

function divideOperation() {
  disableAllOperator();

  document.getElementById("resultButton").disabled = false;
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "/";
 
}

function moduloOperation() {
  disableAllOperator();

  document.getElementById("resultButton").disabled = false;
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "%";
 
}

//the numbers function

function numberOne() {
  enableAllOperator()

  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "1";
 
}

function numberTwo() {
  enableAllOperator()

  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "2";
 
}

function numberThree() {
  enableAllOperator()
  
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "3";
 
}

function numberFour() {
  enableAllOperator();

  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "4";
 
}

function numberFive() {
  enableAllOperator();

  let insertAdd = documenadd.getElementById("theOperation");
  insertAdd.value += "5";
 
}

function numberSix() {
  enableAllOperator()

  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "6";
 
}

function numberSeven() {
  enableAllOperator()

  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "7";
 
}

function numberEight() {
  enableAllOperator()

  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "8";
 
}

function numberNine() {
  enableAllOperator()

  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "9";
 
}

function numberZero() {
  enableAllOperator()

  let insertAdd = document.getElementById("theOperation");
  insertAdd.value += "0";
 
}


//clear All
function clearAll() {
  document.getElementById("resultButton").disabled = true;
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value = "";
}

//clear one last character
function clearOne() {
  let insertAdd = document.getElementById("theOperation");
  insertAdd.value = (insertAdd.value).slice(0, -1);
 
}

//a bunch of function that i need so i doesnt need type very much
function disableAllOperator() {
  document.getElementById("addOperator").disabled = true;
  document.getElementById("subtractOperator").disabled = true;
  document.getElementById("divideOperator").disabled = true;
  document.getElementById("multiplyOperator").disabled = true;
  document.getElementById("moduloOperator").disabled = true;
}

function enableAllOperator() {
  document.getElementById("addOperator").disabled = false;
  document.getElementById("subtractOperator").disabled = false;
  document.getElementById("divideOperator").disabled = false;
  document.getElementById("multiplyOperator").disabled = false;
  document.getElementById("moduloOperator").disabled = false;
}
function disableAllNumbers() {
  var cells = table.getElementsByClassName("numbers"); 
for (var i = 0; i < cells.length; i++) { 
    cells[i].disabled = true;
}
}