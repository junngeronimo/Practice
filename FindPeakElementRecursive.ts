function findPeakElement(nums: number[]): number {

  return binarySearch(nums, 0, nums.length - 1);

};

function binarySearch(nums: number[], left:number, right:number): number {

  if (left === right) return left;

  let mid:number = Math.floor((left+right) / 2);

  if (nums[mid] > nums[mid + 1]) return binarySearch(nums, left, mid);
  
  return binarySearch(nums, mid + 1, right);

}

let numbers = [1,2,1,3,5,6,4];

console.log(findPeakElement(numbers));

