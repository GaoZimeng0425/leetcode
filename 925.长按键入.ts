/*
 * @Author: gaozimeng
 * @Date: 2021-05-22 10:30:32
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-22 10:41:29
 * @Description: Do not edit
 * @FilePath: /undefined/Users/gaozimeng/.leetcode/925.长按键入.ts
 */
/*
 * @lc app=leetcode.cn id=925 lang=typescript
 *
 * [925] 长按键入
 *
 * https://leetcode-cn.com/problems/long-pressed-name/description/
 *
 * algorithms
 * Easy (39.40%)
 * Likes:    198
 * Dislikes: 0
 * Total Accepted:    48K
 * Total Submissions: 122.9K
 * Testcase Example:  '"alex"\n"aaleex"'
 *
 * 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
 * 
 * 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：name = "alex", typed = "aaleex"
 * 输出：true
 * 解释：'alex' 中的 'a' 和 'e' 被长按。
 * 
 * 
 * 示例 2：
 * 
 * 输入：name = "saeed", typed = "ssaaedd"
 * 输出：false
 * 解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
 * 
 * 
 * 示例 3：
 * 
 * 输入：name = "leelee", typed = "lleeelee"
 * 输出：true
 * 
 * 
 * 示例 4：
 * 
 * 输入：name = "laiden", typed = "laiden"
 * 输出：true
 * 解释：长按名字中的字符并不是必要的。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * name.length <= 1000
 * typed.length <= 1000
 * name 和 typed 的字符都是小写字母。
 * 
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
function isLongPressedName(name: string, typed: string): boolean {
  let index = 0
  let index2 = 0
  while (index2 < typed.length) {
    let v1 = name[index]
    let v2 = typed[index2]
    if (v1 === v2) {
      index++
      index2++
    } else if (v2 === typed[index2 - 1]) {
      index2++
    } else {
      return false
    }
  }
  return index === name.length
};
// @lc code=end

