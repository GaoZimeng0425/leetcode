/*
 * @lc app=leetcode.cn id=804 lang=typescript
 * @lcpr version=21913
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
const MORSE = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..'
]
function uniqueMorseRepresentations(words: string[]): number {
  const set = new Set<string>()
  for (const word of words) {
    const morse = word.split('').map((char) => MORSE[char.charCodeAt(0) - 97])
    set.add(morse.join(''))
  }
  return set.size
}
// @lc code=end

/*
// @lcpr case=start
// ["gin", "zen", "gig", "msg"]\n
// @lcpr case=end

// @lcpr case=start
// ["a"]\n
// @lcpr case=end

 */
