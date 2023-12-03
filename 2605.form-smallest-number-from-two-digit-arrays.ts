/*
 * @lc app=leetcode.cn id=2605 lang=typescript
 * @lcpr version=21913
 *
 * [2605] 从两个数字数组里生成最小数字
 */

// @lc code=start
function minNumber(nums1: number[], nums2: number[]): number {
  const list1: boolean[] = Array.from({ length: 10 }, () => false)
  const list2: boolean[] = Array.from({ length: 10 }, () => false)

  nums1.forEach((item) => (list1[item] = true))
  nums2.forEach((item) => (list2[item] = true))

  let [a, b] = [0, 0]
  for (let i = 0; i < 10; i++) {
    if (list1[i] && list2[i]) return i
    if (list1[i] && a === 0) {
      a = i
    }
    if (list2[i] && b === 0) {
      b = i
    }
  }
  return Math.min(a * 10 + b, b * 10 + a)
}
// @lc code=end

/*
// @lcpr case=start
// [4,1,3]\n[5,7]\n
// @lcpr case=end

// @lcpr case=start
// [3,5,2,6]\n[3,1,7]\n
// @lcpr case=end

 */
