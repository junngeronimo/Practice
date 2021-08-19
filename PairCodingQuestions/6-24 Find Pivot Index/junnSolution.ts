function pivotIndex(nums: number[]): number {
    
  let pivotIndex:number = -1;
  let leftSum:number;
  let rightSum:number;
  
  for (let i = 0; i < nums.length; i++) {
      
      //leftSum
      if (i === 0) { 
          leftSum = 0;
      } else {
          leftSum = 0;
          for (let j = 0; j < i; j++) {
              leftSum += nums[j];
          }
      }
      
      //rightSum
      if (i === nums.length-1) {
          rightSum = 0;
      } else {
          rightSum = 0;
          for (let k = nums.length-1; k > i; k--) {
              rightSum += nums[k];
          }
      }
      
      // console.log(`i = ${i}\nleftSum=${leftSum}\nrightSum=${rightSum}`);
      
      if (leftSum === rightSum) {
          pivotIndex = i;
          return pivotIndex;
      }
      
  }
  
  return pivotIndex;

};

//theres always more 