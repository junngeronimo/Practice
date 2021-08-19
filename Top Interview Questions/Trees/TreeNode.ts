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

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

  // printTree() {
  //   let print:string = "[" + this.val + ", ";
  //   let currNode:TreeNode;

  //   const printHelper = (s:string, currNode:TreeNode | null):string => {

  //     if (!this.left===undefined || !this.right===undefined) {
  //       return s + ", " + currNode.val;
  //     }

  //     currNode = this.left;
  //     s += printHelper(s + ", " + currNode.val, currNode);

  //     currNode = this.right;
  //     s += printHelper(s + ", " + currNode.val, currNode);
      
  //     return s;
  //   }

  //   print = printHelper(print, currNode);

  //   console.log(print + "]");

  // }

}

  // Input: root = [3,9,20,null,null,15,7]
export function createTree(arr:number[]): TreeNode | null {
  if (arr.length === 0) return null;
  let root:TreeNode;
  let i = 0

  const helper = (arr:number[], i:number, root: TreeNode | null): TreeNode | null => {
    if (i === 0) {
      return helper(arr, i+1, new TreeNode(arr[i]));
    }
    if (!root) return root;
    if (i >= arr.length) return root;  
    
    if (i % 2 === 0) {
      return helper(arr, i+1, root.right);
    } else {
      return helper(arr, i+1, root.left);
    }
    
  }

  root = helper(arr, i, root);

  return root;
  
}

// Input: root = [3,9,20,null,null,15,7]
export function print(root:TreeNode | null) {
  
  let printStack:any[] = [];

  printStack.push(root ? root.val : null);

  const printHelp = (root:TreeNode | null, p:any[]):any[] => {
    
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
    } else if (!root.left && !root.right) {
      p.push(null)
      p.push(null)
      return p;
    }


    return p;
  } 

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


export default TreeNode;