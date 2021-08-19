class Solution {
  public int pivotIndex(int[] nums) {
    int sum = 0, left = 0;
    for (int i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    for (int i = 0; i < nums.length; i++) {
        if (left == sum - left - nums[i]) return i;
        left += nums[i];
    }
    return -1;
  }
}

// Loop and find sum of all nums[]
// Loop again and find sums starting from left
// If your current leftSum == sum - leftSum - nums[i], then you found a match.

// The idea is if pivot exists, leftside + pivot = rightside + pivot.
// For example, arr = [1, 3, 7, 6, 5, 6]
// left = [1, 4, 11 ,17, 22, 28]
// right = [28, 27, 24, 17, 11, 6]
// If there is a pivot, it shuould have the same index, then we return it, otherwise return -1;