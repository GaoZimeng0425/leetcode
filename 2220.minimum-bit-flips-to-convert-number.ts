/*
 * @lc app=leetcode.cn id=2220 lang=typescript
 * @lcpr version=21917
 *
 * [2220] 转换数字的最少位翻转次数
 */

// @lc code=start
const to2 = (count: number) => {
  const list = []
  while (count > 0) {
    list.push(count % 2)
    count = Math.floor(count / 2)
  }
  return list
}
function minBitFlips(start: number, goal: number): number {
  const [v1, v2] = [to2(start), to2(goal)]
  console.log(v1, v2)
  let c = 0
  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    v1[i] !== v2[i] && c++
  }
  return c
};
// @lc code=end


console.log(
  minBitFlips(10, 82),
)

/*
// @lcpr case=start
// 10\n7\n
// @lcpr case=end

// @lcpr case=start
// 3\n4\n
// @lcpr case=end

 */

