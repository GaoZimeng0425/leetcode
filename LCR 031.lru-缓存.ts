/*
 * @lc app=leetcode.cn id=LCR 031 lang=typescript
 * @lcpr version=21917
 *
 * [LCR 031] LRU 缓存
 */

// @lc code=start
class LRUCache {
  capacity: number
  map: Map<number, number> = new Map<number, number>()
  constructor(capacity: number) {
    this.capacity = capacity
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const value = this.map.get(key)!
      this.map.delete(key)
      this.map.set(key, value)
      return value
    }
    return -1
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this.map.delete(key)
    }
    this.map.set(key, value)
    if (this.map.size > this.capacity) {
      const firstKey = this.map.keys().next().value
      this.map.delete(firstKey)
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// @lcpr case=start
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\n
// @lcpr case=end
