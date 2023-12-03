/*
 * @Author: gaozimeng
 * @Date: 2021-05-15 10:56:39
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-15 11:09:21
 * @Description: Do not edit
 * @FilePath: /vuessr/Users/gaozimeng/.leetcode/884.两句话中的不常见单词.ts
 */
/*
 * @lc app=leetcode.cn id=884 lang=typescript
 *
 * [884] 两句话中的不常见单词
 *
 * https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/description/
 *
 * algorithms
 * Easy (63.96%)
 * Likes:    84
 * Dislikes: 0
 * Total Accepted:    17K
 * Total Submissions: 26K
 * Testcase Example:  '"this apple is sweet"\n"this apple is sour"'
 *
 * 给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）
 *
 * 如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的。
 *
 * 返回所有不常用单词的列表。
 *
 * 您可以按任何顺序返回列表。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入：A = "this apple is sweet", B = "this apple is sour"
 * 输出：["sweet","sour"]
 *
 *
 * 示例 2：
 *
 * 输入：A = "apple apple", B = "banana"
 * 输出：["banana"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= A.length <= 200
 * 0 <= B.length <= 200
 * A 和 B 都只包含空格和小写字母。
 *
 *
 */

// @lc code=start
function uncommonFromSentences(s1: string, s2: string): string[] {
  const list = [...s1.split(' '), ...s2.split(' ')]
  const set: Set<string> = new Set()
  const result: Set<string> = new Set()
  list.forEach((letter) => {
    if (set.has(letter)) {
      result.delete(letter)
    } else {
      set.add(letter)
      result.add(letter)
    }
  })
  return [...result]
}
// @lc code=end
