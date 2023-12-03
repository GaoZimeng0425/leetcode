/*
 * @lc app=leetcode.cn id=面试题 03.04 lang=typescript
 * @lcpr version=30102
 *
 * [面试题 03.04] 化栈为队
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class MyQueue {
  inStack: number[] = []
  outStack: number[] = []
  constructor() {}

  push(x: number): void {
    while (this.outStack.length !== 0) {
      this.inStack.push(this.outStack.pop()!)
    }
    this.inStack.push(x)
  }

  pop(): number {
    while (this.inStack.length !== 0) {
      this.outStack.push(this.inStack.pop()!)
    }
    return this.outStack.pop()!
  }

  peek(): number {
    while (this.inStack.length !== 0) {
      this.outStack.push(this.inStack.pop()!)
    }
    return this.outStack.at(-1)!
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

// @lcpr case=start
// ["MyQueue","push","push","peek","pop","empty"]\n[[],[1],[2],[],[],[]]\n
// @lcpr case=end
