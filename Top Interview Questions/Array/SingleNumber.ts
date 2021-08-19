function singleNumber(nums: number[]): number {

  const map = new Map();
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i])+1)
      total -= nums[i]
    } else {
      map.set(nums[i], 1);
      total += nums[i]
    }
  }

  return total;
};

console.log(singleNumber(
  
  [2,2,1]

));