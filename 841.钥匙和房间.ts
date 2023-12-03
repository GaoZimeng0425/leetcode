/*
 * @lc app=leetcode.cn id=841 lang=typescript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
function canVisitAllRooms(rooms: number[][]): boolean {
  const doorMap: Map<number, boolean> = new Map()
  const keys: number[] = [0]
  while (keys.length) {
    const currentKey: number = keys[0]
    doorMap.set(currentKey, true)
    rooms[currentKey].forEach((key: number) => {
      if (doorMap.has(key)) return
      keys.push(key)
    })
    keys.shift()
  }
  return doorMap.size === rooms.length
};
// @lc code=end

