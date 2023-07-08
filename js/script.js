let userAge = prompt("How old are you?", "");
if (userAge >= 0 && userAge <= 11) {
   alert("You are a child");
} else if (userAge >= 12 && userAge <= 17) {
   alert("You are teenaiger");
} else if (userAge >= 18 && userAge <= 59) {
   alert("You are adult");
} else if (userAge >= 60) {
   alert("You are retired");
} else alert("Enter correct age");

//--------task 2-------//
let enterNumber = prompt("Enter the number from 0 to 9");
switch (enterNumber) {
   case "0":
      alert(")");
      break;
   case "1":
      alert("!");
      break;
   case "2":
      alert("@");
      break;
   case "3":
      alert("#");
      break;
   case "4":
      alert("$");
      break;
   case "5":
      alert("%");
      break;
   case "6":
      alert("^");
      break;
   case "7":
      alert("&");
      break;
   case "8":
      alert("*");
      break;
   case "9":
      alert("(");
      break;
   default:
      alert("Enter correct number");
}
//------------task3-------------//
let numberFirst = +prompt("Enter first number", "");
let numberSecond = +prompt("Enter second number", "");
if (numberFirst > numberSecond) {
   [numberFirst, numberSecond] = [numberSecond, numberFirst];
}
let sumNumbersFirst = (numberFirst * (numberFirst - 1)) / 2;
let sumNumbersSecond = (numberSecond * (numberSecond + 1)) / 2;
let sumNumbers = sumNumbersSecond - sumNumbersFirst;
alert(sumNumbers);

let number_1 = +prompt("Enter first number", "");
let number_2 = +prompt("Enter second number", "");
if (number_1 > number_2) {
   [number_1, number_2] = [number_2, number_1];
}
let sum = 0;
do {
   sum += number_1;
   number_1 += 1;
} while (number_1 <= number_2);

alert(sum);

//--------palindrom --------------//
let enterNumberCheckPalindrom = prompt("Enter the number check palindrom");
if (
   enterNumberCheckPalindrom.split("").reverse().join("") ===
   enterNumberCheckPalindrom
) {
   alert("Yes it is a palindrome");
} else alert("No, it's not a palindrome");

//------------multiplication tables ---------//

for (let i = 1; i < 11; i++) {
   for (let j = 1; j < 11; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
   }
}
