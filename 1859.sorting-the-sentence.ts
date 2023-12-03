/*
 * @lc app=leetcode.cn id=1859 lang=typescript
 * @lcpr version=21913
 *
 * [1859] 将句子排序
 */

// @lc code=start

const split = (str: string): [string, number] => {
  const match = str.match(/(?<word>\w+)(?<int>\d+$)/)
  return [match?.groups?.word ?? '', Number(match?.groups?.int)]
}
function sortSentence(s: string): string {
  const words = s.split(' ').map(split)
  return words
    .sort((a, b) => a[1] - b[1])
    .map((a) => a[0])
    .join(' ')
}
// @lc code=end

/*
// @lcpr case=start
// "is2 sentence4 This1 a3"\n
// @lcpr case=end

// @lcpr case=start
// "Myself2 Me1 I4 and3"\n
// @lcpr case=end

 */
