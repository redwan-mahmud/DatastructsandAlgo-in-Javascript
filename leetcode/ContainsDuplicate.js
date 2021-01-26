/*Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    //not as fast 
    // var numsObject = {}
    // for (let i =0; i < nums.length;i++){
        
    //     if (numsObject[nums[i]]){
    //         //console.log(numsObject[nums[i]])
            
    //         return true 
    //     } 
    //     numsObject[nums[i]]= 1; //counts the number of elements in the object 
    //     //console.log(numsObject)
        

        
    // }
    // //console.log(numsObject)
    // return false 

    //faster solution 
    let map = new Map()
    for (let i = 0; i < nums.length ; i ++){
        if(map.has(nums[i])){
            return true 
            break
        }
        map.set(nums[i], 1 )

    }
    return false

};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,2,3]))