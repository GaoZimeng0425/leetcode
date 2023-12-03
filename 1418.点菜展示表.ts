/*
 * @lc app=leetcode.cn id=1418 lang=typescript
 *
 * [1418] 点菜展示表
 */

// @lc code=start
function displayTable(orders: string[][]): string[][] {
  const tableMap: Map<string, Map<string, number>> = new Map()
  const set: Set<string> = new Set()
  for (const order of orders) {
    let [_, t, f] = order
    set.add(f)
    const foodMap: Map<string, number> = tableMap.get(t) || new Map()
    foodMap.set(f, (foodMap.get(f) || 0) + 1)
    tableMap.set(t, foodMap)
  }
  const result: string[][] = []
  const list = ['Table']
  result.push(list)
	const tableList = []
  ;[...set].sort().forEach((v1) => list.push(v1))
  tableMap.forEach((foodMap, tableId) => {
		const stack = list.slice(1).map((name) => (foodMap.get(name) || 0).toString())
		stack.unshift(tableId)
    tableList.push(stack)
  })
	tableList.sort((a, b) => a[0] - b[0])
  return result.concat(tableList)
}
// @lc code=end
