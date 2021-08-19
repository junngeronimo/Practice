function singleNumber(nums) {
    var map = new Map();
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
            total -= nums[i];
        }
        else {
            map.set(nums[i], 1);
            total += nums[i];
        }
    }
    console.log(map);
    return total;
}
;
console.log(singleNumber([2, 2, 1]));
