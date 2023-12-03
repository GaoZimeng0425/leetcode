/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function(headA, headB) {
//   let tmpa = headA
//   let tmpb = headB
//   let map = new Map()
//   while (tmpa) {
//     map.set(tmpa, true)
//     tmpa = tmpa.next
//   }
//   while (tmpb) {
//     if (map.has(tmpb)) return tmpb
//     tmpb = tmpb.next
//   }
//   return null
// };
var getIntersectionNode = function(headA, headB) {
  let tempa = headA
  let tempb = headB
  let fa = true
  let fb = true
  while (tempa && tempb) {
    if (tempa === tempb) return tempa
    tempa = tempa.next
    tempb = tempb.next
    if (!tempb && fb) {
      tempb = headA
      fb = false
    }
    if (!tempa && fa) {
      tempa = headB
      fa = false
    }
  }
  return null
};
// @lc code=end

