/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU缓存机制
 *
 * https://leetcode-cn.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (51.08%)
 * Likes:    1365
 * Dislikes: 0
 * Total Accepted:    165.9K
 * Total Submissions: 317K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
 * 
 * 
 * 
 * 实现 LRUCache 类：
 * 
 * 
 * LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value)
 * 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 0 
 * 最多调用 3 * 10^4 次 get 和 put
 * 
 * 
 */

// @lc code=start

type Chain = {
    val: number
    key: number
    prev: Chain
    next: Chain
}
const ChainNode = (val, key?, prev?, next?): Chain => {
    return { val, key, prev, next }
}
class LRUCache {
    head: Chain = ChainNode(null)
    tail: Chain = ChainNode(null)
    map: Map<number, Chain> = new Map()
    size: number
    constructor(capacity: number) {
        this.size = capacity
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    get(key: number): number {
        let node = this.map.get(key)
        if (node != null) {
            this.moveToHead(node)
        }
        return node?.val ?? -1
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            let node = this.map.get(key)
            node.val = value
            this.moveToHead(node)
            return
        }
        let node = ChainNode(value, key)
        this.addToHead(node)
        this.map.set(key, node)
        if (this.map.size > this.size) {
            this.removeTail()
        }
    }

    addToHead (node) {
        let { head } = this
        let { next } = head
        head.next = node

        node.next = next
        node.prev = head
        
        next.prev = node
    }

    moveToHead (node) {
        this.removeNode(node)
        this.addToHead(node)
    }

    removeNode (node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    removeTail () {
        let { tail } = this
        let { prev: deleteNode } = tail
        this.removeNode(deleteNode)
        this.map.delete(deleteNode.key)
    }
}

// class LRUCache {
//     size: number
//     map: Map<number, number> = new Map()
//     list: number[] = []
//     constructor(capacity: number) {
//         this.size = capacity
//     }

//     get(key: number): number {
//         let value = this.map.get(key)
//         if (value != null) {
//             this.refresh(key)
//         }
//         return value ?? -1
//     }

//     put(key: number, value: number): void {
//         this.map.set(key, value)
//         this.refresh(key)
//     }
//     refresh (key: number) {
//         let { list } = this
//         let index = list.lastIndexOf(key)
//         list.unshift(key)

//         let { length } = list

//         if (index !== -1) {
//             list.splice(index + 1, 1)
//         } else if (length > this.size) {
//             this.map.delete(list[length - 1])
//             list.splice(this.size)
//         }
//     }
// }

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

