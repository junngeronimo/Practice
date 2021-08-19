function removeDuplicates(nums) {
    var k = 0;
    var uniqueNumber = 0;
    k++;
    var nextUniqueNumber = 0;
    for (var i = 0; i < nums.length; i++) {
        // Find index of next unique number
        if (nums[uniqueNumber] === nums[i]) {
            nextUniqueNumber++;
            console.log("nextUniqueNumber: " + nums[nextUniqueNumber]);
        }
        else {
            nums[uniqueNumber + 1] = nums[nextUniqueNumber];
            uniqueNumber++;
            k++;
            nextUniqueNumber++;
        }
    }
    console.log("uniqueNumber: " + nums[uniqueNumber]);
    console.log(nums);
    return k;
}
;
var numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var numbers1 = [1, 1, 2];
console.log(removeDuplicates(numbers));
console.log(removeDuplicates(numbers1));
// removeDuplicates(numbers);
