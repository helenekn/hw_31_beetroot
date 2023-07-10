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

btn[1].addEventListener("click", addPhotoCountArguments);

function addPhotoCountArguments() {
   answer[1].innerHTML = "<img src='assets/img/task2.png'>";
}

btn[2].addEventListener("click", addPhotoCompareTwoNubers);

function addPhotoCompareTwoNubers() {
   answer[2].innerHTML = "<img src='assets/img/task3.png'>";
}

btn[3].addEventListener("click", addPhotofindFactorial);

function addPhotofindFactorial() {
   answer[3].innerHTML = "<img src='assets/img/task4.png'>";
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

function findFactorial(n) {
   if (n === 0) {
      return 1;
   } else return n * findFactorial(n - 1);
}
console.log(factorial(3));

//---------task 5----------//

function connectNumber(x, y, z) {
   return +[x, y, z].join("");
}

console.log(connectNumber(1, 4, 5));

//----------task 6------------//
function findAreaFigure(...value) {
   if (value.length === 1) {
      return value ** 2;
   } else if (value.length === 2) {
      return value[0] * value[1];
   } else return "Enter the correct number of sizes";
}

console.log(findAreaFigure(3, 4));
console.log(findAreaFigure(4));
console.log(findAreaFigure(3, 4, 5));

//--------------task 1 norm-----------//
function defindPerfectNumber(x) {
   let temp = 0;
   for (let i = 1; i <= x / 2; i++) {
      if (x % i === 0) {
         temp += i;
      }
   }
   if (temp === x && temp !== 0) {
      return "This number is perfect";
   } else return "This number is not perfect";
}

console.log(defindPerfectNumber(6));

//--------task 2 norm ---------//

function findPerfectNumber(arr, callback) {
   let result = [];
   for (let i = arr[0]; i <= arr[1]; i++) {
      if (callback(i) === "This number is perfect") {
         result.push(i);
      }
   }
   return result;
}

console.log(findPerfectNumber([1, 50], defindPerfectNumber));
