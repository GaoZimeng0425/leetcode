/*
 * @lc app=leetcode.cn id=901 lang=typescript
 * @lcpr version=21917
 *
 * [901] 股票价格跨度
 */

// @lc code=start
class StockSpanner {
    list: number[] ;
    constructor(list: number[]) {
        this.list = list
    }

    next(price: number): number {
        let c = 1
        for (let i = this.list.length - 1; i >= 0; i--) {
            if (this.list[i] <= price) {
                c++
            } else {
                break
            }
        }
        this.list.push(price)
        return c
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end



/*
// @lcpr case=start
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"][[], [100], [80], [60], [70], [60], [75], [85]]\n
// @lcpr case=end

 */

