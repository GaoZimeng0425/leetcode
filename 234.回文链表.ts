/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (44.95%)
 * Likes:    935
 * Dislikes: 0
 * Total Accepted:    226.5K
 * Total Submissions: 483.9K
 * Testcase Example:  '[1,2,2,1]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  const r: number[] = []
  let middle: number = 0
  while (head) {
    r.push(head.val)
    head = head.next
  }
  middle = r.length / 2 >> 0
  for (let i = 0; i < middle; i++) {
    let s = r[i]
    let e = r[r.length - i - 1]
    if (s !== e) return false
  }
  return true
};
// @lc code=end

