/*
 * @lc app=leetcode.cn id=15 lang=typescript
 * @lcpr version=21909
 *
 * [15] 三数之和
 */

// @lc code=start

function threeSum(nums: number[]): number[][] {
  const result: number[][] = []
  const set = new Set()
  if (nums.length < 3) return result
  nums.sort((a, b) => a - b)
  let left = 0
  let index = left + 1
  let right = nums.length - 1
  while (left < right) {
    const [n1, n2, n3] = [nums[left], nums[index], nums[right]]
    const value = n1 + n2 + n3
    if (value === 0) {
      const key = `${n1},${n2},${n3}`
      if (!set.has(key)) {
        set.add(key)
        result.push([n1, n2, n3])
      }
      right--
      left++
      index = left + 1
    } else if (value < 0) {
      if (index < right - 1) {
        index++
      } else {
        left++
        index = left + 1
      }
    } else {
      right--
    }
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */
