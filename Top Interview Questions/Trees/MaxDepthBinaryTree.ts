// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { createTree, print } from "./TreeNode";
import TreeNode from "./TreeNode";

function maxDepth(root: TreeNode | null): number {

  if (!root) return 0;
  let i:number = 0;

  const maxDepthHelp = function(root: TreeNode | null, i: number): number {
    if (!root) return i
    if (root.left) {return maxDepthHelp(root.left, i + 1)}
    else {return maxDepthHelp(root.right, i + 1)}
  }

  i = maxDepthHelp(root, i);

  return i;

}



let root = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)))



// console.log(maxDepth(root))
print(root);
// console.log(root.val, root.left.val, root.right.val, null, null, root.right.left.val, root.right.right.val);

print(createTree([3,9,20,null,null,15,7]));



// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// 3
//   9
//   20
//     15
//     7

// Output: 3

// Example 2:
// Input: root = [1,null,2]
// 1
//   null
//   2

// Output: 2

// Example 3:
// Input: root = []
// Output: 0

// Example 4:
// Input: root = [0]
// Output: 1