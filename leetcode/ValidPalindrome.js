/*Valid Palindome ~ Easy 
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:
Input: "race a car"
Output: false
Constraints:s consists only of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let b = s.toLowerCase().replace(/[^A-Za-z0-9]/gi,'');
    //console.log(b)
    // r = b.split('').reverse().join('')
    // //console.log(r)
    // if( r === b) 
    //     return true 
    // else return false 
    //r = b.reverse()

    //console.log(r)
    //console.log(b[0])
    let start = 0;
    let end = b.length - 1;
   
   // console.log("hello")
    while(start < end){
        //console.log(1)
        console.log(s[start])
        console.log(s[end]) 
        if(s[start]!== s[end]) return false  
        start ++;
        end --;
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
