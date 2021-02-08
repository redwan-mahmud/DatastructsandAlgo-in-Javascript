/*Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 

Note: You may assume the string contains only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map()
    let count = 1;
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i]) == null) map.set(s[i],count)
        else {
            count = map.get(s[i]);
            console.log(count)
           // map.set(s[i],count); 
        }
    }

    console.log(map)

   
};

console.log(firstUniqChar("leetcode"))