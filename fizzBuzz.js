const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FizzBuzz`);
        } else if (i % 3 === 0) {
            console.log(`Fizz`);
        } else if (i % 5 === 0) {
            console.log(`Buzz`);
        } else {
            console.log(i);
        }
    }
}

//(fizzBuzz(15));  // FizzBuzz
//(fizzBuzz(5));   // Fizz
//(fizzBuzz(3));   // Buzz
//(fizzBuzz(1));   // 1
//(fizzBuzz(7));   // 7
//(fizzBuzz(100)); // Buzz
//(fizzBuzz(50));  // Buzz
//(fizzBuzz(30));  // FizzBuzz
//(fizzBuzz(20));  // Buzz