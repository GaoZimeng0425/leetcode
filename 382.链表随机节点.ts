/*
 * @lc app=leetcode.cn id=382 lang=typescript
 *
 * [382] 链表随机节点
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

class Solution {
    head: ListNode | null
    constructor(head: ListNode | null) {
        this.head = head
    }

    getRandom(): number {
      let index = 1
      let temp = this.head
      let chance = Math.floor(Math.random() * index)
      while (this.head !== null) {

      }
      temp.next
      return 
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end

