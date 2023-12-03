/*
 * @lc app=leetcode.cn id=面试题 02.03 lang=javascript
 * @lcpr version=30102
 *
 * [面试题 02.03] 删除中间节点
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}
// @lc code=end

/*
// @lcpr case=start
// 节点 5 （位于单向链表 4->5->1->9 中）\n
// @lcpr case=end

 */
