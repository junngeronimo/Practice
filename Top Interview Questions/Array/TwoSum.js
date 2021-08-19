function twoSum(nums, target) {
    var twoNums = [];
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var xa = target - nums[i];
        if (map.has(xa)) {
            twoNums = [map.get(xa), i];
        }
        map.set(nums[i], i);
    }
    return twoNums;
}
;
// let nums = [2,7,11,15];
// let nums = [3,2,4]
var nums = [3, 3];
// let target = 9
// let target = 6
var target = 6;
console.log(twoSum(nums, target));
// (x1, x2, ... xn)
// there exists a pair such that xa + xb = target
// xa = target - xb
