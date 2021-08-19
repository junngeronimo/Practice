// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.


// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// let root = 
//   new TreeNode(0, 
//     new TreeNode(-3, 
//       new TreeNode(-10), 
//       null), 
//     new TreeNode(9, 
//       new TreeNode(5,
//       null)))
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:
// let root2 =
//   new TreeNode(0,
//     new TreeNode(-10,
//       null,
//       new TreeNode(-3)),
//     new TreeNode(5,
//       null,
//       new TreeNode(9)))

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.

import TreeNode from './TreeNode';

function sortedArrayToBST(nums: number[]): TreeNode | null {

  let lowIndex = 0; // if program gets to index 0, stop
  let highIndex = nums.length-1; // if program gets to rootIndex, stop
  let pivotIndex = Math.floor((lowIndex+highIndex) / 2);

  // console.log(`mid: ${rootIndex}`);
  
  const helper = (nums:number[], lowIndex:number, highIndex:number): TreeNode | null => {
    if (lowIndex > highIndex) return null;
    let pivotIndex = Math.floor((lowIndex+highIndex) / 2);

    console.log(`lowIndex = ${lowIndex}, highIndex = ${highIndex}, pivot = ${pivotIndex}`)

    let leftNums = nums.slice(lowIndex, pivotIndex);
    console.log(`nums: ${nums}\n -- leftNums: ${leftNums}`);

    let rightNums = nums.slice(pivotIndex+1, highIndex+1)
    console.log(` -- rightNums: ${rightNums}\n`);

    let node = new TreeNode(nums[pivotIndex]);

    node.left = helper(leftNums, lowIndex, leftNums.length-1);
    node.right = helper(rightNums, lowIndex, rightNums.length-1);

    return node;
  }

  let root = helper(nums, lowIndex, highIndex);

  return root;
};

sortedArrayToBST([-10,-3,0,5,9])
// sortedArrayToBST([1,2])