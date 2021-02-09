/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,3], target = 6
Output: [0,1]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numObject = {};

  for (let i = 0; i < nums.length; i++) {
    numObject[nums[i]] = i;
  }
  console.log(numObject);
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    if (numObject[comp]) {
      return [numObject[comp], i];
    }
  }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// most efficient 
var twoSum2 = function(nums, target) {
  let map = new Map();
  
  console.log(map)
   for(let i = 0; i < nums.length; i++){
      let comp = target - nums[i]
      if(map.has(comp) && map.get(comp)!= i){
          return([i,map.get(comp)])
      }
      map.set(nums[i], i);
  }
  
  
};

console.log(twoSum2([3,2,4],
  6)); // [1, 3]
//console.log(twoSum([3, 9, 12, 20], 21)); // [9, 12]
