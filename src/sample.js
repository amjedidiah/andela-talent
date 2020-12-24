const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    const res =
      i % 3 === 0 && i % 5 === 0 ?
        'FizzBuzz' :
        i % 3 === 0 && i % 5 !== 0 ?
        'Fizz' :
        i % 3 !== 0 && i % 5 === 0 ?
        'Buzz' :
        i;

    console.log(res);
  }
};

fizzBuzz(15);
