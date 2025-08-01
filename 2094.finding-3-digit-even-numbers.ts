/*
 * @lc app=leetcode.cn id=2094 lang=typescript
 * @lcpr version=30204
 *
 * [2094] 找出 3 位偶数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findEvenNumbers(digits: number[]): number[] {
  const result = new Set<number>();
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        if (i === j || j === k || i === k || digits[i] === 0) {
          continue;
        }

        const num = digits[i] * 100 + digits[j] * 10 + digits[k];
        if (num % 2 === 0) {
          result.add(num);
        }
      }
    }
  }

  return [...result].sort((a, b) => a - b);
};
// @lc code=end



/*
// @lcpr case=start
// [2,1,3,0]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,8,8,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,7,5]\n
// @lcpr case=end

 */
