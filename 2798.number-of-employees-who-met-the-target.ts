/*
 * @lc app=leetcode.cn id=2798 lang=typescript
 * @lcpr version=30102
 *
 * [2798] 满足目标工作时长的员工数目
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  return hours.filter((h) => h >= target).length
}
// @lc code=end

/*
// @lcpr case=start
// [0,1,2,3,4]\n2\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,2,2]\n6\n
// @lcpr case=end

 */
