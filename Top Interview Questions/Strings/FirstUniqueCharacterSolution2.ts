/**
 *  https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
 * 
 * Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.
 * 

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

 */




// assess letter at an index

// check the rest of the word for that letter

    // if true, return current index

    // else, assess another letter



function firstUniqChars(s: string): number {
  
  let letterOccurrences = {};

  for (let i = 0; i < s.length; i++) {
    if (!letterOccurrences[s.charAt(i)]) {
      letterOccurrences[s.charAt(i)] = 1;
    } else {
      letterOccurrences[s.charAt(i)] += 1;
    }
  }

  // console.log(letterOccurrences);

  for (let i = 0; i < s.length; i++) {
    if (letterOccurrences[s.charAt(i)] === 1) {
      // console.log(i);
      return i;
    }
  }

  return -1;
};

firstUniqChars("leetcode");
firstUniqChars("loveleetcode");
firstUniqChars("aabb");