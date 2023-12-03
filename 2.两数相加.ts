/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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
 * debugPrint( , wrapWidth: 1024);debugPrint( , wrapWidth: 1024);}
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result: ListNode | null = new ListNode(Number.MIN_SAFE_INTEGER)
  let temp: ListNode | null = result
  let add:number = 0
  let num: number
  while (l1 || l2) {
    num = add + (l1?.val || 0) + (l2?.val || 0)
    add = num > 9 ? 1 : 0;
    temp.next = new ListNode(num % 10)
    temp = temp!.next
    l1 = l1?.next || null
    l2 = l2?.next || null
  }
  if (add) temp.next = new ListNode(1)
  return result.next
};
// @lc code=end

