/*
 * @lc app=leetcode.cn id=981 lang=typescript
 *
 * [981] 基于时间的键值存储
 */

// @lc code=start
class TimeMap {
  map: Map<string, [string, number][]> = new Map()

  set(key: string, value: string, timestamp: number): void {
    const { map } = this
    if (map.has(key)) {
      map.get(key).push([value, timestamp])
    } else {
      map.set(key, [[value, timestamp]])
    }
  }

  get(key: string, timestamp: number): string {
    const list = this.map.get(key)
    if (!list) return ''
    let { length } = list
    while (length--) {
      const [value, saveTimestamp] = list[length]
      if (saveTimestamp <= timestamp) return value
    }
    return ''
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

