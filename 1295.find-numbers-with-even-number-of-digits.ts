/*
 * @lc app=leetcode.cn id=1295 lang=typescript
 * @lcpr version=21914
 *
 * [1295] 统计位数为偶数的数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findNumbers(nums: number[]): number {
  return nums.filter((num) => num.toString().length % 2 === 0).length
}
// @lc code=end

/*
// @lcpr case=start
// [12,345,2,6,7896]\n
// @lcpr case=end

// @lcpr case=start
// [555,901,482,1771]\n
// @lcpr case=end

 */
