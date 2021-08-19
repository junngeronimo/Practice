// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

import TreeNode from './TreeNode';

function levelOrder(root: TreeNode | null): number[][] {

  const levels: number[][] = [];

  const helper = (node: TreeNode | null, i: number) => {
    if (!node) return;

    // call left side
    helper(node.left, i+1);

    // push into array
    levels[i] ? levels[i].push(node.val) : (levels[i] = [node.val]);

    // call right side
    helper(node.right, i+1);

  }

  helper(root, 0);
  return levels;
}