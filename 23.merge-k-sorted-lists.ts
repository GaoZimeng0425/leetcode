/*
 * @lc app=leetcode.cn id=23 lang=typescript
 * @lcpr version=21913
 *
 * [23] 合并 K 个升序链表
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const current = new ListNode()
  let head = current
  while (true) {
    let min = lists[0]
    for (let i = 1; i < lists.length; i++) {
      if (min.val > lists[i]?.val) {
        min = lists[i]
      }
    }
    head.next = min
  }
}
// @lc code=end

/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */
