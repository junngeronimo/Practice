function twoSum(nums: number[], target: number): number[] {

  let twoNums:number[] = [];
  let map = new Map();
  
  for (let i = 0; i < nums.length; i++) {

    let xa = target - nums[i];
    
    if (map.has(xa)) {
      twoNums = [map.get(xa), i];
    }

    map.set(nums[i], i);
  }

  return twoNums;
};