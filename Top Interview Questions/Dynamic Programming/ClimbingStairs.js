function climbStairs(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    var distinctClimbCombos = []; // Start at 1 cause you can always do 1 + 1 + ... = n
    distinctClimbCombos[0] = 1;
    distinctClimbCombos[1] = 2;
    for (var i = 2; i < n; i++) {
        distinctClimbCombos[i] = distinctClimbCombos[i - 1] + distinctClimbCombos[i - 2];
    }
    console.table(distinctClimbCombos);
    return distinctClimbCombos[n - 1];
}
;
// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));
console.log(climbStairs(45));
// Base cases:
/**
 * n == 1,
 * n == 2,
 *
 * We know that at any given 'n', we are [n-1] or [n-2] away from solution
 *  n1 and n2
 *
 * total ways to get to [n] = n1 + n2
 *
 * from the [n-1] point, we can take one single step to reach [n]
 * from the [n-2] point, we can take two steps
 *
 *
 */ 
