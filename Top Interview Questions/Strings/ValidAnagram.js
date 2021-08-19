"use strict";
/** https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/
 *
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */
function isAnagram(s, t) {
    var isAnagram = true;
    var sLettersUsed = {};
    var tLettersUsed = {};
    if (s.length !== t.length)
        return false;
    for (var i = 0; i < s.length; i++) {
        if (!sLettersUsed[s.charAt(i)]) {
            sLettersUsed[s.charAt(i)] = 1;
        }
        else {
            sLettersUsed[s.charAt(i)]++;
        }
        if (!tLettersUsed[t.charAt(i)]) {
            tLettersUsed[t.charAt(i)] = 1;
        }
        else {
            tLettersUsed[t.charAt(i)]++;
        }
    }
    var sKeys = Object.keys(sLettersUsed);
    // console.log(sLettersUsed);
    // console.log(tLettersUsed);
    for (var i = 0; i < sKeys.length; i++) {
        var currentLetter = sKeys[i];
        // console.log(currentLetter);
        // console.log(sLettersUsed[currentLetter]);
        // console.log(tLettersUsed[currentLetter]);
        if (sLettersUsed[currentLetter] !== tLettersUsed[currentLetter])
            return false;
    }
    return isAnagram;
}
;
console.log(isAnagram("a", "ab"));
console.log(isAnagram("aacc", "accc"));
