// Write a function that reverses a string. The input string is given as an array of characters s.

/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {

  let startIndex = 0;
  let endIndex = s.length-1;

  for (let i = 0; i < s.length; i++) {
    if (startIndex === endIndex || startIndex === s.length/2) break;

    // console.log(`startIndex: ${startIndex} `);
    // console.log(`endIndex: ${endIndex}`);

    let placeHolder = s[i];
    s[startIndex] = s[endIndex];
    startIndex++;

    s[endIndex] = placeHolder;
    endIndex--;
  }
};



var s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var s2 = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


reverseString(s);
reverseString(s2);

console.log(s);
console.log(s2);