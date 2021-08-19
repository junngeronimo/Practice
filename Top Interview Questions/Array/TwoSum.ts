function twoSum(nums: number[], target: number): number[] {
  let twoNums:number[];
  let map = new Map();
  
  for (let i = 0; i < nums.length; i++) {

    let xa = target - nums[i];
    
    if (map.has(xa)) {
      let twoNums = [map.get(xa), i];
    }

    map.set(nums[i], i);
  }

  return twoNums;
};

// let nums = [2,7,11,15];
// let nums = [3,2,4]
let nums = [3,3]
// let target = 9
// let target = 6
let target = 6

console.log(twoSum(nums, target))

// (x1, x2, ... xn)

// there exists a pair such that xa + xb = target

// xa = target - xb