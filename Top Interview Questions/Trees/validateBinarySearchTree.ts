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
 * 
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 */

import TreeNode from "./TreeNode";

function isValidBST(root: TreeNode | null): boolean {
  // if root is null, return true;
  if (!root) return true;

  return dfsForValidBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function dfsForValidBST(node: TreeNode | null, min: number, max: number) {

  // base case: return false if current node does not adhere to min and max
  if (node.val <= min || node.val >= max) {
    console.log(`1`)
    return false;
  }

  // if left is valid
  if (node.left) {
    // recursive call to compare node.val and node.left to min 
    const leftValid = dfsForValidBST(node.left, min, node.val);
    if (!leftValid) {
      console.log(`2`)
      return false;
    }

  }

  // if right is valid
  if (node.right) {
    // recursive call to compare node.val and
    const rightValid = dfsForValidBST(node.right, max, node.val);
    if (!rightValid) {
      console.log(`3`)
      return false;
    }
  }

  return true;
}

