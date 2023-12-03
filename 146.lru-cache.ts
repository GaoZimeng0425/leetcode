/*
 * @lc app=leetcode.cn id=146 lang=typescript
 * @lcpr version=21917
 *
 * [146] LRU 缓存
 */

// @lc code=start
class Node {
  key?: number
  value?: number
  next!: Node
  prev!: Node
  constructor(key?: number, value?: number) {
    this.key = key
    this.value = value
  }
}
class LRUCache {
  head = new Node()
  tail = new Node()
  capacity: number
  cache: Map<number, Node>

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map<number, Node>()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(key: number): number {
    let result = this.cache.get(key)
    if (result) {
      this.deleteNode(result)
      this.pushNode(result)
    }
    return result?.value ?? -1
  }

  deleteNode(node: Node) {
    const { prev, next } = node
    prev!.next = next
    next && (next.prev = prev)
  }

  pushNode(node: Node) {
    const prevHead = this.head.next

    this.head.next = node
    prevHead && (prevHead.prev = node)

    node.next = prevHead
    node.prev = this.head
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!
      node.value = value
      this.deleteNode(node)
      this.pushNode(node)
    } else {
      const newNode = new Node(key, value)
      this.cache.set(key, newNode)
      this.pushNode(newNode)

      if (this.cache.size > this.capacity) {
        const node = this.tail.prev
        if (!node) return
        this.deleteNode(node)
        this.cache.delete(node.key!)
      }
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

/*
// @lcpr case=start
// ["LRUCache","put","put","put","put","get","get"]\n[[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]
// @lcpr case=end
// @lcpr case=start
// ["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,0],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
// @lcpr case=end
// @lcpr case=start
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// @lcpr case=end

 */
