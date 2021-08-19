function findPeakElementIterative(nums: number[]): number {
  let peakIndex:number = 0;

  // check that nums[i] > nums[i-1] && nums[i+1]

  for (let i = 1; i < nums.length; i++) {

    if (nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
      peakIndex = i;
      break;
    } else if (nums[i] < nums[i+1]) {
      peakIndex = i+1;
      i++;
    } else if (nums[i] < nums[i-1]) {
      peakIndex = i-1;
      break;
    } else {
      peakIndex = i;
    }


  }

  return peakIndex;

};

let nums = [1,2,1,3,5,6,4];
// output = 2

let nums2 = [1,2];
// output = 5
let nums3 = [4,3,2,1];

console.log(findPeakElementIterative(nums));
console.log(findPeakElementIterative(nums2));
console.log(findPeakElementIterative(nums3));

// 2147483648