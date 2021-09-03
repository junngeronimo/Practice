function lengthOfLongestSubstring(s: string): number {
  
  let longestSubstringLen:number = 0;
  let currSubstringLen:number = 0;
  let currLetters = new Map();
  
  // console.log(`s: ${s}`)
  
  for (let i = 0; i < s.length; i++) {
    
    // console.log(`i: ${i}`)
    // console.log(currLetters)
    
    if (currLetters.has(s[i])) {
      // console.log(`currSubstringLen: ${currSubstringLen}, currLetters.get(s[i])+1: ${currLetters.get(s[i])+1}`)
      currSubstringLen = Math.max(currSubstringLen, currLetters.get(s[i])+1)
    }
    currLetters.set(s[i], i)
    // console.log(`longestSubstringLen: ${longestSubstringLen}, i-currSubstringLen+1: ${i-currSubstringLen+1}`)
    longestSubstringLen = Math.max(longestSubstringLen, i-currSubstringLen+1)
    
    
//     // var for current character in string
//     let currChar = s.charAt(i);
//     // console.log(`currChar: ${currChar}`)
//     // console.log(currLetters);
    
//     // adding current unique letter to a Map
//     if (!currLetters.has(currChar)) {
//       currLetters.set(currChar, 1) // init a new letter
//       currSubstringLen++;
//     } else {
//       // found a repeat char, reset all and start at i - sequence.length
//       // console.log(`longestSubstringLen: ${longestSubstringLen} - currSubstringLen: ${currSubstringLen}`)
//       longestSubstringLen = currSubstringLen > longestSubstringLen ? currSubstringLen : longestSubstringLen;
      
      
//       i -= currSubstringLen;
//       currSubstringLen = 0;
//       currLetters = new Map();
//       // console.log(currLetters);
//     }
    
//     longestSubstringLen = currSubstringLen > longestSubstringLen ? currSubstringLen : longestSubstringLen;

    
  }
  
  // console.log(`return: longestSubstringLen: ${longestSubstringLen}`)
  return longestSubstringLen;

};

// d -> d
// wipe
// d -> j

// sequence = [a]
// currLetters = [a:1,]


// ====================
// [a,b,c,a,b,c,b,b]
// [0,1,2,3,4,5,6,7]

// 0 -> 1 -> 2 -> 3
// a -> b -> c -> a STOP SAME LETTER
// abc

// substringLen = 3

// 1 -> 2 -> 3 -> 4
// b -> c -> a -> b STOP SAME LETTER
// bca

// 2 -> 3 -> 4 -> 5
// c -> a -> b -> c STOP SAME LETTER
// cab

// 3 -> 4 -> 5 -> 6
// a -> b -> c -> b STOP SAME LETTER


// 4 -> 5 -> 6
// b -> c -> b STOP SAME LETTER

