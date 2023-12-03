/*
 * @lc app=leetcode.cn id=2525 lang=typescript
 * @lcpr version=21917
 *
 * [2525] 根据规则将箱子分类
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
enum BoxType {
  Neither = 0,
  Bulky = 2 << 0,
  Heavy = 2 << 1,
  Both = BoxType.Bulky | BoxType.Heavy
}
const MAX_LENGTH = Math.pow(10, 4)
const MAX_WEIGHT = Math.pow(10, 9)
function categorizeBox(length: number, width: number, height: number, mass: number): string {
  let type = BoxType.Neither
  if (mass >= 100) type = BoxType.Heavy
  if (length >= MAX_LENGTH || width >= MAX_LENGTH || height >= MAX_LENGTH) type |= BoxType.Bulky
  if (length * width * height >= MAX_WEIGHT) type |= BoxType.Bulky
  return BoxType[type]
}
// @lc code=end
/*
// @lcpr case=start
// 1000\n35\n700\n300\n
// @lcpr case=end

// @lcpr case=start
// 200\n50\n800\n50\n
// @lcpr case=end

 */
