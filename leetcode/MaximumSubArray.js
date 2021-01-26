/*53. Maximum Subarray
Easy

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:
Input: nums = [1]
Output: 1
Example 3:
Constraints:
1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle. */ 
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var curr_max = 0;
    var max_so_far = 0;

    for(let i = 0; i < nums.length; i++){
        curr_max = Math.max(nums[i], curr_max + nums[i]);
        max_so_far = Math.max(curr_max, max_so_far);
    }

    return max_so_far
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// implemented using Kadane's approach 