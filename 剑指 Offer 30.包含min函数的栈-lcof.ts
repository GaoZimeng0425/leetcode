/*
 * @lc app=leetcode.cn id=剑指 Offer 30 lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 30] 包含min函数的栈
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class MinStack {
  stack: number[] = []
  constructor() {}

  push(x: number): void {
    const { stack } = this
    if (stack.length === 0) {
      stack.push(x)
      return
    }
    for (let i = 0; i < stack.length; i++) {
      const cur = stack[i]
      if (cur < x) {
        stack.splice(i, 0, x)
        break
      }
    }
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.stack.at(0)!
  }

  getMin(): number {
    return this.stack.at(-1)!
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

/*
// @lcpr case=start
// ["MinStack","push","push","push","getMin","pop","top","getMin"][[],[-2],[2],[-3],[],[],[],[]]\n
// @lcpr case=end

 */
