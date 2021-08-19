function reverse(x: number): number {

  let xString = x.toString();
  let xReversedString:string = "";

  for (let i = xString.length-1; i >= 0; i--) {
    xReversedString = xReversedString.concat(xString.charAt(i));
  }

  if (xString.charAt(0) === "-") {
    xReversedString = xReversedString.substring(0, xReversedString.length-1);
    let minus = "-";
    xReversedString = minus.concat(xReversedString);
  } 
  if (xReversedString.charAt(0) === '0' && xReversedString.length > 1) {
    xReversedString = xReversedString.substring(1, xReversedString.length);
  } 

  let reversedNum:number = Number(xReversedString);
  // console.log(reversedNum);


  if ((reversedNum < Math.pow(-2, 31)) || (reversedNum > (Math.pow(2, 31) -1))) return 0;

  return reversedNum;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
/*
Given a signed 32-bit integer x, return x with its digits reversed. 
  If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21

Input: x = 0
Output: 0
*/