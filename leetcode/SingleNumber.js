/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
Example 1:
Input: nums = [2,2,1]
Output: 1
Example 2:
Input: nums = [4,1,2,1,2]
Output: 4
Example 3:
Input: nums = [1]
Output: 1
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();
    let count = 1; 
    for(let i = 0; i < nums.length; i++){
        count = 1;
        if(!map.has(nums[i])){
            map.set(nums[i], count)
        }
        else{
            count = map.get(nums[i]);
            count++
            map.set(nums[i],count)
        }
    }
    //console.log(map.get[nums[0]])
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i])==1)
            
            return nums[i]
    }
};

var SingleNumber2 = function(nums){
    let xor;
    xor = nums[0];
    for(let i = 1; i < nums.length;i++){
        xor = xor ^ nums[i];
    }
    return xor

}

console.log(SingleNumber2([2,2,1]))