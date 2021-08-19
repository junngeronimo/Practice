var MinStack = /** @class */ (function () {
    // init stack object
    function MinStack() {
        this.stack = [];
    }
    // push 'val' onto stack
    MinStack.prototype.push = function (val) {
        this.stack.length === 0 ? this.stack[0] = val : this.stack[this.stack.length] = val;
        // console.log(`push() in val = ${val} \n--- stack: ` + this.stack);
    };
    // removes element at top of stack
    MinStack.prototype.pop = function () {
        var poppedItem = this.stack[this.stack.length - 1];
        this.stack = this.stack.slice(0, this.stack.length - 1);
        // console.log(`pop() out val = ${poppedItem} \n--- stack: ` + this.stack);
    };
    // retrieves the top element of the stack
    MinStack.prototype.top = function () {
        var top = this.stack[this.stack.length - 1];
        // console.log(`top() num: ${top} \n--- stack: ${this.stack}`)
        return top;
    };
    // gets the minimum element in the stack
    MinStack.prototype.getMin = function () {
        var minNum = Number.MAX_SAFE_INTEGER;
        for (var i = 0; i < this.stack.length; i++) {
            if (this.stack[i] < minNum)
                minNum = this.stack[i];
        }
        // console.log(`getMin(): ${minNum} \n--- stack: ${this.stack}`);
        return minNum;
    };
    return MinStack;
}());
// let stack = new MinStack();
// stack.push(4);
// stack.push(3);
// stack.push(2);
// stack.push(1);
// stack.pop();
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top(); // return 0
minStack.getMin(); // return -2
/**
 * 3
 * 2
 * 1
 * 0
 */
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
//  Input
//  ["MinStack","push","push","push","getMin","pop","top","getMin"]
//  [[],[-2],[0],[-3],[],[],[],[]]
//  Output
//  [null,null,null,null,-3,null,0,-2]
//  Explanation
//  MinStack minStack = new MinStack();
//  minStack.push(-2);
//  minStack.push(0);
//  minStack.push(-3);
//  minStack.getMin(); // return -3
//  minStack.pop();
//  minStack.top();    // return 0
//  minStack.getMin(); // return -2
