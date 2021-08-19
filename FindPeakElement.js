function findPeakElement(nums) {
    var peakIndex = 0;
    // check that nums[i] > nums[i-1] && nums[i+1]
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            peakIndex = i;
            break;
        }
        else if (nums[i] < nums[i + 1]) {
            peakIndex = i + 1;
            i++;
        }
        else if (nums[i] < nums[i - 1]) {
            peakIndex = i - 1;
            break;
        }
        else {
            peakIndex = i;
        }
    }
    return peakIndex;
};
var nums = [1, 2, 1, 3, 5, 6, 4];
// output = 2
var nums2 = [1, 2];
// output = 5
var nums3 = [4, 3, 2, 1];
console.log(findPeakElement(nums));
console.log(findPeakElement(nums2));
console.log(findPeakElement(nums3));
// 2147483648
