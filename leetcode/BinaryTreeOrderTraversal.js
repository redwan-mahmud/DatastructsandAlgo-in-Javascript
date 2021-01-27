/*Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // we will need to implement breadth first search 
    // need to use a queue 
    //push elements to queue ~ first in first out 
    //
    var res = [];
    if (!root) return  res;
    
    var q = [];
    q.push(root); //pushing the initial address in the queue
    while(q.length){
         const level = [];
         let rowSize = queue.length;
         while(rowSize > 0){
             let currentNode = q.shift();
             if(currentNode.left) q.push(currentNode.left)
             if(currentNode.right) q.push(currentNode.right) 
             level.push(currentNode.val)
             rowSize--;
         }
         res.push(row)
    }

    return res;


};