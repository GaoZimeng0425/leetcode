/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// function g (l) {
//   let list = []
//   while (l && l.val != null) {
//     list.push(l.val)
//     l = l.next
//   }
//   return list.join('')
// }
// function plus (str1, str2) {
//   // if (str1.length > str2.length) [str1, str2] = [str2, str1]
//   let str = []
//   let l = Math.max(str1.length, str2.length)
//   let i = 0
//   let sup = 0
//   while (i < l) {
//     let a = ~~str1[i] || 0
//     let b = ~~str2[i] || 0
//     let cur = a + b + sup
//     str[i++] = cur % 10
//     sup = cur >= 10 ? 1 : 0
//   }
//   if (sup) str.push(sup)
//   return str.join('')
// }
// var addTwoNumbers = function(l1, l2) {
//   let num = plus(g(l1), g(l2))
//   // let num = g(l1) + g(l2)
//   let root = null
//   let current = null
//   num.toString().split('').forEach(n => {
//     let c = new ListNode(n)
//     if (!root) {
//       root = current = c
//     } else {
//       current = current.next = c
//     }
//   })
//   return root
// };


// const isGreaterThen9 = num => num > 9
// const isNull = o => o == null
// var addTwoNumbers = function(l1, l2) {
//   let sup = 0
//   let c1 = l1
//   let c2 = l2
//   while (c1 || c2) {
//     if (isNull(c1)) {
//       c1 = c2
//       c2 = null
//     }
//     let v1 = c1 ? c1.val : 0
//     let v2 = c2 ? c2.val : 0
//     const cur = v1 + v2 + sup
//     c1.val = cur % 10
//     sup = isGreaterThen9(cur)
//     if (isNull(c1.next)) {
//       if (c2 && !isNull(c2.next)) {
//         c1.next = c2.next
//         c2.next = null
//       } else {
//         break
//       }
//     }
//     c1 = c1.next
//     c2 = c2 && c2.next || null
//   }
//   if (sup) {
//     c1.next = new ListNode(1)
//   }
//   return l1
// };

// var addTwoNumbers = function (l1, l2) {
//   const result = l1 || l2
//   let temp = result
//   let add = 0
//   let current
//   while(l1 || l2) {
//     current = add + (l1 && l1.val) + (l2 && l2.val)
//     temp.val = current % 10
//     add = current > 9 ? 1 : 0
//     l1 = l1 && l1.next
//     l2 = l2 && l2.next
//     temp.next = l1 || l2 || null
//     temp = temp.next || temp
//   }
//   add && (temp.next = new ListNode(1))
//   return result
// }
var addTwoNumbers = function (l1, l2) {
  const result = new ListNode('head')
  let temp = result
  let add = 0
  let current
  while(l1 || l2) {
    current = add + (l1 && l1.val) + (l2 && l2.val)
    temp.next = new ListNode(current % 10)
    add = current > 9 ? 1 : 0
    l1 = l1 && l1.next
    l2 = l2 && l2.next
    temp = temp.next
  }
  add && (temp.next = new ListNode(1))
  return result.next
}
// @lc code=end
