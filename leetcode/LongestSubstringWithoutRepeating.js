/*3. Longest Substring Without Repeating Characters
Medium
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:
Input: s = ""
Output: 0
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var arr = [];
    var count = 0; 
    var maxCount = 0;
    for( let i = 0; i < s.length; i++){
        if(!arr.includes(s[i])){
            arr.push(s[i])
            //count = arr.length;
        }
        else{
            var j = arr.indexOf(s[i]);
            arr.splice(0,j+1)
            arr.push(s[i])  
        }
        count = arr.length

        maxCount = Math.max(count,maxCount)
    }
    return maxCount
};

// s = "pwwkew"

// console.log(lengthOfLongestSubstring(s))

s = "abcabcdebb" //5
console.log(lengthOfLongestSubstring(s))

// s = "qrsvbspk"
// console.log(lengthOfLongestSubstring(s))


// s = "abaab!bb"
// console.log(lengthOfLongestSubstring(s))


