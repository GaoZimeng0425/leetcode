/*
 * @lc app=leetcode.cn id=609 lang=typescript
 * @lcpr version=30111
 *
 * [609] 在系统中查找重复文件
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findDuplicate(paths: string[]): string[][] {
  const map = new Map<string, string[]>()
  for (const path of paths) {
    const [filePath, ...files] = path.split(' ')
    for (const file of files) {
      const [name, content] = file.split('(')
      if (!map.has(content)) map.set(content, [])
      map.get(content)!.push(`${filePath}/${name}`)
    }
  }
  return Array.from(map.values()).filter((v) => v.length > 1)
}
// @lc code=end

/*
// @lcpr case=start
// ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]\n
// @lcpr case=end

// @lcpr case=start
// ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]\n
// @lcpr case=end

 */
