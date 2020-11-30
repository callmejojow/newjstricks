// Fizz Buzz Tryout
for (var i = 0; i < 101; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 5 === 0) console.log("Buzz");
  else if (i % 3 === 0) console.log("Fizz");
  else console.log(i);
}
// QQ1: Why do others use "let" instead of var?
// QQ2: Is there any other easier solution to this?

function greet() {
  return "Good Morning!"
}

// call the function
var dogname = greet()
console.log(dogname)


// declare the function
function greeting(name){
  console.log("Good Morning, " + name + "!");
}

// call the function with a parameter
greeting("Maggie");


// declare the function
function divide(numberOne, numberTwo) {
  console.log(numberOne / numberTwo);
}

// call the function
// should return 5
divide(10, 2)



// declare the function
function largestNum(num1, num2) {
if (num1 > num2){
  return num1;
} 
else if(num1 < num2){
  return num2;
} else{
  return false;
}
}
largestNum(3,8);