const fizzBuzz = () => {
  const n = prompt('Input a number: ');
  const output = Array.from({ length: n }, (_, index) => index + 1);
  const answer = output.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return String(num);
    }
  });
  console.log(answer);
};

fizzBuzz();
