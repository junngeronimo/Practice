function lengthOfLongestSubstring(s) {
    var lettersUsed = {};
    var substringLength = 0;
    var previousLength = 0;
    if (s.length === 1)
        return 1;
    for (var i = 0; i < s.length; i++) {
        console.log("i: " + i);
        if (!lettersUsed[s.charAt(i)]) {
            lettersUsed[s.charAt(i)] = 1;
            console.log(lettersUsed);
            console.log("s.charAt(i): " + s.charAt(i));
            substringLength++;
        }
        else {
            lettersUsed = {};
            console.log("before previousLength: " + previousLength);
            previousLength = substringLength > previousLength ? substringLength : previousLength;
            console.log("after previousLength: " + previousLength);
            substringLength = 0;
            // lettersUsed[s.charAt(i)] = 1;
            i--;
        }
    }
    // console.log(lettersUsed);
    if (Object.keys(lettersUsed).length > previousLength)
        return substringLength;
    return previousLength;
}
;
var s = "abcabcbb";
var s2 = "bbbbb";
var s3 = "pwwkew";
var s4 = "dvdf";
console.log(lengthOfLongestSubstring(s));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));
console.log(lengthOfLongestSubstring(s4));
