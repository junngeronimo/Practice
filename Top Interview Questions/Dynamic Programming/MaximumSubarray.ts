function maxSubArray(nums: number[]): number {
  
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
/**
 * 
 * 1. Figure out format of sub-problem (state of each sub-problem) in this Dynamic Program
 *    maxSubArray(nums:number[], i:number, j:number)
 *    
 *    maxSubArray(nums, 0, nums.length - 1) is the base problem
 * 
 *    instead let's try
 *        maxSubArray(nums, i) - from nums[0:i]
 * 
 *    sub-problem vs main problem now is
 *        
 *        maxSubArrayA(nums, i) = maxSubArray(nums, i - 1) > 0 ? maxSubArray(nums, i - 1) : 0 + nums[i];
 */