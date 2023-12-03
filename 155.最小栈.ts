/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
    task: number[]
    constructor() {
        this.task = []
    }

    push(x: number): void {
        this.task.push(x) 
    }

    pop(): void {
        this.task.pop()
    }

    top(): number {
        return this.task[this.task.length - 1]
    }

    getMin(): number {
        let min: number = this.task[0]
        for (let i = 1; i < this.task.length; i++) {
            let cur: number = this.task[i]
            min = Math.min(cur, min)
        }
        return min
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

