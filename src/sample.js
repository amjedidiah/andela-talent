/**
 * This function returns an
 * output for every number between
 * 1 and the number passed to the function as follows:
 *
 * - For numbers divisible by 3 & 5, it returns 'FizzBuzz'
 * - For numbers divisible by 3 & not 5, it returns 'Fizz'
 * - For numbers divisible by 5 & not 3, it returns 'Buzz'
 * - For numbers divisible by neither 3 nor 5, it returns the number
 *
 * @param {number} n
 */
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
