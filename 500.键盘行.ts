/*
 * @Author: gaozimeng
 * @Date: 2021-05-07 10:28:27
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-07 10:46:14
 * @Description: Do not edit
 * @FilePath: /webpack/Users/gaozimeng/.leetcode/500.键盘行.ts
 */
/*
 * @lc app=leetcode.cn id=500 lang=typescript
 *
 * [500] 键盘行
 *
 * https://leetcode-cn.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (69.58%)
 * Likes:    129
 * Dislikes: 0
 * Total Accepted:    26K
 * Total Submissions: 37K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。
 * 
 * 美式键盘 中：
 * 
 * 
 * 第一行由字符 "qwertyuiop" 组成。
 * 第二行由字符 "asdfghjkl" 组成。
 * 第三行由字符 "zxcvbnm" 组成。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：words = ["Hello","Alaska","Dad","Peace"]
 * 输出：["Alaska","Dad"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：words = ["omk"]
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：words = ["adsdf","sfd"]
 * 输出：["adsdf","sfd"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * words[i] 由英文字母（小写和大写字母）组成
 * 
 * 
 */

// @lc code=start
// const line = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
// function findWords(words: string[]): string[] {
//   let result = []
//   for (let word of words) {
//     let flag = true
//     const word2 = word.toLowerCase()
//     const letter = word2[0]
//     const letters = line.find((item) => item.includes(letter))
//     for (const l of word2) {
//       if (!letters.includes(l)) {
//         flag = false
//         break
//       }
//     }
//     if (flag) result.push(word)
//   }
//   return result
// };

function findWords(words: string[]): string[] {
  return words.filter(word => /^[qwertyuiop]+$|^[asdfghjkl]+$|^[zxcvbnm]+$/i.test(word))
};

// @lc code=end

