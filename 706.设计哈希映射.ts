/*
 * @lc app=leetcode.cn id=706 lang=typescript
 *
 * [706] 设计哈希映射
 *
 * https://leetcode-cn.com/problems/design-hashmap/description/
 *
 * algorithms
 * Easy (58.30%)
 * Likes:    188
 * Dislikes: 0
 * Total Accepted:    46.9K
 * Total Submissions: 72.6K
 * Testcase Example:  '["MyHashMap","put","put","get","get","put","get","remove","get"]\n' +
  '[[],[1,1],[2,2],[1],[3],[2,1],[2],[2],[2]]'
 *
 * 不使用任何内建的哈希表库设计一个哈希映射（HashMap）。
 * 
 * 实现 MyHashMap 类：
 * 
 * 
 * MyHashMap() 用空映射初始化对象
 * void put(int key, int value) 向 HashMap 插入一个键值对 (key, value) 。如果 key
 * 已经存在于映射中，则更新其对应的值 value 。
 * int get(int key) 返回特定的 key 所映射的 value ；如果映射中不包含 key 的映射，返回 -1 。
 * void remove(key) 如果映射中存在 key 的映射，则移除 key 和它所对应的 value 。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
 * [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
 * 输出：
 * [null, null, null, 1, -1, null, 1, null, -1]
 * 
 * 解释：
 * MyHashMap myHashMap = new MyHashMap();
 * myHashMap.put(1, 1); // myHashMap 现在为 [[1,1]]
 * myHashMap.put(2, 2); // myHashMap 现在为 [[1,1], [2,2]]
 * myHashMap.get(1);    // 返回 1 ，myHashMap 现在为 [[1,1], [2,2]]
 * myHashMap.get(3);    // 返回 -1（未找到），myHashMap 现在为 [[1,1], [2,2]]
 * myHashMap.put(2, 1); // myHashMap 现在为 [[1,1], [2,1]]（更新已有的值）
 * myHashMap.get(2);    // 返回 1 ，myHashMap 现在为 [[1,1], [2,1]]
 * myHashMap.remove(2); // 删除键为 2 的数据，myHashMap 现在为 [[1,1]]
 * myHashMap.get(2);    // 返回 -1（未找到），myHashMap 现在为 [[1,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 最多调用 10^4 次 put、get 和 remove 方法
 * 
 * 
 * 
 * 
 * 进阶：你能否不使用内置的 HashMap 库解决此问题？
 * 
 */

// @lc code=start
class MyHashMap {
    list: [number, number][]
    constructor() {
        this.list = []
    }

    find (key: number) {
        return this.list.find(([k]) => k === key)
    }
    findIndex (key: number) {
        return this.list.findIndex(([k]) => k === key)
    }
    put(key: number, value: number): void {
        const item = this.find(key)
        if (item) {
            item[1] = value
            return
        }
        this.list.push([key, value])
    }

    get(key: number): number {
        const item = this.find(key)
        return item ? item[1] : -1
    }

    remove(key: number): void {
        const index = this.findIndex(key)
        if (index !== -1) {
            this.list.splice(index, 1)
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end

