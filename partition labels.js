/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {

    // Create a new array to keep track of unique characters
    
    const a = new Array(26);

    for (let i = 0; i < s.length; i++) {
        console.log(s[i]+": "+s[i].charCodeAt(0)+" - i: " + i);
        a[s[i].charCodeAt(0) - 97] = i;
        console.log("a[s[i].charCodeAt(0) - 97] - " + a[s[i].charCodeAt(0) - 97]);

    }

    // console.log(a);

    
    
};


let s = "ababcbacadefegdehijhklij";

let desiredOutput = [9,7,8];
let sPartition = ["ababcbaca", "defegde", "hijhklij"];

partitionLabels(s);
