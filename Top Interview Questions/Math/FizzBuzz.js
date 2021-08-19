// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.
function fizzBuzz(n) {
    var answer = new Array(n + 1);
    for (var i = 1; i < n + 1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer[i] = "Fizzbuzz";
        }
        else if (i % 3 === 0) {
            answer[i] = "Fizz";
        }
        else if (i % 5 === 0) {
            answer[i] = "Buzz";
        }
        else {
            answer[i] = i.toString();
        }
    }
    return answer.slice(1, n + 1);
}
;
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
