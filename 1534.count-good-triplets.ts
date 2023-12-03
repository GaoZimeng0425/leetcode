/*
 * @lc app=leetcode.cn id=1534 lang=typescript
 * @lcpr version=21917
 *
 * [1534] 统计好三元组
 */

// @lc code=start
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  let result: number = 0

  for (let i = 0; i < arr.length; i++) {
    const iv = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      const jv = arr[j]
      for (let k = j + 1; k < arr.length; k++) {
        const kv = arr[k]
        if (Math.abs(iv - jv) <= a && Math.abs(jv - kv) <= b && Math.abs(iv - kv) <= c)  {
          result++
        }
      }
    }
  }
  return result
};
// @lc code=end



/*
// @lcpr case=start
// [3,0,1,1,9,7]\n7\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,2,3]\n0\n0\n1\n
// @lcpr case=end

 */

