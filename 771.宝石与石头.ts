/*
 * @Author: gaozimeng
 * @Date: 2021-05-04 10:25:00
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-04 10:29:33
 * @Description: Do not edit
 * @FilePath: /.leetcode/771.宝石与石头.ts
 */
/*
 * @lc app=leetcode.cn id=771 lang=typescript
 *
 * [771] 宝石与石头
 *
 * https://leetcode-cn.com/problems/jewels-and-stones/description/
 *
 * algorithms
 * Easy (84.88%)
 * Likes:    640
 * Dislikes: 0
 * Total Accepted:    142.9K
 * Total Submissions: 168K
 * Testcase Example:  '"aA"\n"aAAbbbb"'
 *
 *  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * 
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 * 
 * 示例 1:
 * 
 * 输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: J = "z", S = "ZZ"
 * 输出: 0
 * 
 * 
 * 注意:
 * 
 * 
 * S 和 J 最多含有50个字母。
 * J 中的字符不重复。
 * 
 * 
 */

// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
  let result: number = 0
  let stonesMap: Map<string, number> = new Map()
  for (const letter of stones) {
    stonesMap.set(letter, (stonesMap.get(letter) || 0) + 1)
  } 
  for (const letter of jewels) {
    if (stonesMap.has(letter)) {
      result += stonesMap.get(letter)!
    }
  }
  return result
};
// @lc code=end

