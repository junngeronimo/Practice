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
 import TreeNode from "./TreeNode";

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  const helper = (left: TreeNode | null, right: TreeNode | null): boolean => {
    // base case, if null return true
    if (!left && !right) return true;

    // if left null, return false
    // if right null, return false
    // if left.val !== right.val, return false
    if (!left) return false;
    if (!right) return false;
    if (left.val !== right.val) return false;

    // recursive call on left's left.left and right's right.right 
    let isOuterMirrorValid:boolean = helper(left.left, right.right);
    // recursive call on left's left.right and right's right.left
    let isInnerMirrorValid:boolean = helper(left.right, right.left);

    // is mirror good?
    let mirrorValid:boolean = isOuterMirrorValid && isInnerMirrorValid;

    return mirrorValid;
  }

  return helper(root.left, root.right);

}