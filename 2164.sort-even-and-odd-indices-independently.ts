/*
 * @lc app=leetcode.cn id=2164 lang=typescript
 * @lcpr version=21917
 *
 * [2164] 对奇偶下标分别排序
 */

// @lc code=start

function sortEvenOdd(nums: number[]): number[] {
  const odd = (nums.filter((_, i) => i % 2 === 1).sort((a, b) => a - b))
  const even = (nums.filter((_, i) => i % 2 === 0).sort((a, b) => b - a))
  for(let i = 0; i < nums.length; i++) {
    if(i % 2 === 0) {
      nums[i] = even.pop()!
    } else {
      nums[i] = odd.pop()!
    }
  }
  return nums;
};
// @lc code=end


/*
// @lcpr case=start
// [4,1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n
// @lcpr case=end

 */

