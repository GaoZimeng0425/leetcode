/*
 * @lc app=leetcode.cn id=剑指 Offer 53 - II lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 53 - II] 0～n-1中缺失的数字
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function takeAttendance(records: number[]): number {
  let [left, right] = [0, records.length - 1]
  while (left <= right) {
    const mid = (left + right) >> 1
    if (records[mid] !== mid) return mid
    if (records[mid] === mid) left = mid + 1
  }
}
// @lc code=end

/*
// @lcpr case=start
// [0]\n
// @lcpr case=end

// @lcpr case=start
// [0, 1, 2, 3, 4, 5, 6, 8]\n
// @lcpr case=end

 */
