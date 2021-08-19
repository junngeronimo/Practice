"use strict";
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
exports.__esModule = true;
exports.print = exports.createTree = exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
// Input: root = [3,9,20,null,null,15,7]
function createTree(arr) {
    if (arr.length === 0)
        return null;
    var root;
    var i = 0;
    var helper = function (arr, i, root) {
        if (i === 0) {
            return helper(arr, i + 1, new TreeNode(arr[i]));
        }
        if (!root)
            return root;
        if (i >= arr.length)
            return root;
        if (i % 2 === 0) {
            return helper(arr, i + 1, root.right);
        }
        else {
            return helper(arr, i + 1, root.left);
        }
    };
    root = helper(arr, i, root);
    return root;
}
exports.createTree = createTree;
// Input: root = [3,9,20,null,null,15,7]
function print(root) {
    var printStack = [];
    printStack.push(root ? root.val : null);
    var printHelp = function (root, p) {
        // if (!root) p.push("null");
        // console.log(p);
        if (!root) {
            p.push(null);
            return p;
        }
        if (root.left) {
            p.push(root.left.val);
            if (root.right) {
                p.push(root.right.val);
            }
            p = printHelp(root.left, p);
            p = printHelp(root.right, p);
        }
        else if (!root.left && !root.right) {
            p.push(null);
            p.push(null);
            return p;
        }
        return p;
    };
    printStack = printHelp(root, printStack);
    console.table(printStack);
    // let s = `[`
    // const printHelp = (root:TreeNode | null, s:string) => {
    //   console.log(`test ${s}`)
    //   if (root === undefined || !root) s += `null, `;
    //   if (root !== undefined) {
    //     s += `${root.val}, `;
    //     if (root.left && root.left.val) {
    //       console.log(`lefttest ${root.left.val}`)
    //       printHelp(root.left, s + `${root.left.val}, `);
    //     } 
    //     if (root.right && root.right.val) {
    //       console.log(`righttest ${root.right.val}`)
    //       printHelp(root.right, s + `${root.right.val}, `);
    //     } 
    //   }
    // }
    // printHelp(root, s);
    // s += `]`
    // console.log(s);
}
exports.print = print;
exports["default"] = TreeNode;
