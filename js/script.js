"use sstrict";
//---------task 1---------//

let btn = document.querySelectorAll(".button");
let answer = document.querySelectorAll(".answer");

btn[0].addEventListener("click", outputAnswer);

function outputAnswer() {
   let kindOfFunction = [
      "Function Declaration",
      "Function Expression",
      "Arrow Function ",
   ];
   for (let i = 0; i < kindOfFunction.length; i++) {
      answer[0].innerHTML += `<p>${i + 1}. ${kindOfFunction[i]}</p> `;
   }
   // answer[0].style.display === "none"
   //    ? (answer[0].style.display = "block")
   //    : (answer[0].style.display = "none");
}

btn[1].addEventListener("click", numberOfArgumen);

function numberOfArgumen() {
   answer[1].innerHTML = "<img src='../assets/img/task2.png'>";
}

btn[2].addEventListener("click", compareNumber);

function compareNumber() {
   answer[2].innerHTML = "<img src='../assets/img/task3.png'>";
}

//------task 2-------------//

function countArguments(...args) {
   console.log(args.length);
}

countArguments(1, 2, 7, 8);

//---------task 3------------//

function compareTwoNubers(x, y) {
   if (x < y) {
      return -1;
   } else if (x > y) {
      return 1;
   } else return 0;
}
console.log(compareTwoNubers(7, 7));

//----------task 4----------//

function factorial(n) {
   if (n === 0) {
      return 1;
   } else return n * factorial(n - 1);
}

console.log(factorial(3));

//---------task 5----------//
