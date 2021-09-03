function arrayNesting(nums: number[]): number {
  
  // let set = new Set();
//   let j = 0;
//   let searchVal = nums[j];
//   let i = 0;
//   let maxLen = 0;
//   let visited = {}
//   visited[j] = true;
  
//   while (j < nums.length) {
    
//     while (!set.has(nums[i])) {

//       set.add(nums[i]);
//       visited[i] = true;
//       i = nums[i];
      

//       // console.log(`i: ${i}`);
//       // console.log(set);
//     }
    
//     maxLen = Math.max(set.size, maxLen);
//     while (visited[j] === true) j++;
//     i = j;
//     set.clear();
//   }
  
//   for efficiency 
  let longestSet = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != Infinity) {
      let k = nums[i];
      let currCount = 0;
      
      while (nums[k] != Infinity) {
        let currVal = k;
        k = nums[k]
        currCount++;
        nums[currVal] = Infinity;
      }
      
      longestSet = Math.max(longestSet, currCount);
    }
    
  }
  
  return longestSet;

};