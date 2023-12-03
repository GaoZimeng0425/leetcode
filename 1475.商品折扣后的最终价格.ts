/*
 * @Author: gaozimeng
 * @Date: 2021-05-07 10:18:21
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-07 10:25:33
 * @Description: Do not edit
 * @FilePath: /webpack/Users/gaozimeng/.leetcode/1475.商品折扣后的最终价格.ts
 */
/*
 * @lc app=leetcode.cn id=1475 lang=typescript
 *
 * [1475] 商品折扣后的最终价格
 *
 * https://leetcode-cn.com/problems/final-prices-with-a-special-discount-in-a-shop/description/
 *
 * algorithms
 * Easy (72.00%)
 * Likes:    34
 * Dislikes: 0
 * Total Accepted:    11.5K
 * Total Submissions: 15.9K
 * Testcase Example:  '[8,4,6,2,3]'
 *
 * 给你一个数组 prices ，其中 prices[i] 是商店里第 i 件商品的价格。
 * 
 * 商店里正在进行促销活动，如果你要买第 i 件商品，那么你可以得到与 prices[j] 相等的折扣，其中 j 是满足 j > i 且 prices[j]
 * <= prices[i] 的 最小下标 ，如果没有满足条件的 j ，你将没有任何折扣。
 * 
 * 请你返回一个数组，数组中第 i 个元素是折扣后你购买商品 i 最终需要支付的价格。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：prices = [8,4,6,2,3]
 * 输出：[4,2,4,2,3]
 * 解释：
 * 商品 0 的价格为 price[0]=8 ，你将得到 prices[1]=4 的折扣，所以最终价格为 8 - 4 = 4 。
 * 商品 1 的价格为 price[1]=4 ，你将得到 prices[3]=2 的折扣，所以最终价格为 4 - 2 = 2 。
 * 商品 2 的价格为 price[2]=6 ，你将得到 prices[3]=2 的折扣，所以最终价格为 6 - 2 = 4 。
 * 商品 3 和 4 都没有折扣。
 * 
 * 
 * 示例 2：
 * 
 * 输入：prices = [1,2,3,4,5]
 * 输出：[1,2,3,4,5]
 * 解释：在这个例子中，所有商品都没有折扣。
 * 
 * 
 * 示例 3：
 * 
 * 输入：prices = [10,1,1,6]
 * 输出：[9,0,1,6]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= prices.length <= 500
 * 1 <= prices[i] <= 10^3
 * 
 * 
 */

// @lc code=start
function finalPrices(prices: number[]): number[] {
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i]
    let j = i + 1
    for (; j < prices.length; j++) {
      if (prices[j] <= price) {
        prices[i] = price - prices[j]
        break
      }
    }
  }
  return prices
};
// @lc code=end

