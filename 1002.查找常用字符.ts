/*
 * @Author: gaozimeng
 * @Date: 2021-05-26 11:17:13
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-26 11:27:05
 * @Description: Do not edit
 * @FilePath: /webpack/Users/gaozimeng/.leetcode/1002.查找常用字符.ts
 */
/*
 * @lc app=leetcode.cn id=1002 lang=typescript
 *
 * [1002] 查找常用字符
 *
 * https://leetcode-cn.com/problems/find-common-characters/description/
 *
 * algorithms
 * Easy (74.40%)
 * Likes:    216
 * Dislikes: 0
 * Total Accepted:    51.5K
 * Total Submissions: 69.6K
 * Testcase Example:  '["bella","label","roller"]'
 *
 * 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3
 * 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
 * 
 * 你可以按任意顺序返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：["bella","label","roller"]
 * 输出：["e","l","l"]
 * 
 * 
 * 示例 2：
 * 
 * 输入：["cool","lock","cook"]
 * 输出：["c","o"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 100
 * 1 <= A[i].length <= 100
 * A[i][j] 是小写字母
 * 
 * 
 */

// @lc code=start
const setMap = (word, map) => {
  for (const letter of word) {
    map[letter] = (map[letter] ?? -1) + 1
  }
}
function commonChars(words: string[]): string[] {
  const map: Record<string, number> = {}
  for (const word of words) {
    console.log(`[G] : word`, word)
    setMap(word, map)
  }
  console.log(`[G] : map`, map)
  return Object.entries(map).filter(([key, value]) => {
    console.log(`[G] : key, value`, key, value)
    return value > 0
  }).map(([key, value]) => {
    return key
  })
};
// @lc code=end

