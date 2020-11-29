// Fizz Buzz Tryout
for (var i = 0; i < 101; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 5 === 0) console.log("Buzz");
  else if (i % 3 === 0) console.log("Fizz");
  else console.log(i);
}
// QQ1: Why do others use "let" instead of var?
// QQ2: Is there any other easier solution to this?