/*
 * @lc app=leetcode.cn id=528 lang=typescript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
class Solution {
  total: number = 0
  range: number[] = []
  constructor(w: number[]) {
    w.forEach((num) => {
      this.total += num
      this.range.push(this.total)
    })
  }

  pickIndex(): number {
    const { total, range } = this
    const index = Math.floor(Math.random() * total) + 1
    return range.findIndex((num) => num >= index)
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end
