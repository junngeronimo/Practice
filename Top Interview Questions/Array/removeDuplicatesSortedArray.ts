function removeDuplicates(nums: number[]): number {
  var k:number = 0;

  var uniqueNumber:number = 0;
  k++;
  var nextUniqueNumber:number = 0;

  for (let i = 0; i < nums.length; i++) {

    // Find index of next unique number
    if (nums[uniqueNumber] === nums[i]) {
      nextUniqueNumber++;
    } else {
      nums[uniqueNumber+1] = nums[nextUniqueNumber];
      uniqueNumber++;
      k++;
      nextUniqueNumber++;
    }
    
  }
  
  console.log(`nextUniqueNumber: ${nums[nextUniqueNumber]}`);
  console.log(`uniqueNumber: ${nums[uniqueNumber]}`);
  console.log(nums);

  return k;
};

var numbers:number[] = [0,0,1,1,1,2,2,3,3,4];
var numbers1 = [1,1,2];

console.log(removeDuplicates(numbers));
console.log(removeDuplicates(numbers1));

// removeDuplicates(numbers);