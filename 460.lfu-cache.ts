/*
 * @lc app=leetcode.cn id=460 lang=typescript
 * @lcpr version=21917
 *
 * [460] LFU 缓存
 */

// @lc code=start
class ChainNode {
  key: number
  value: number
  freq: number
  next: ChainNode | null
  prev: ChainNode | null
  constructor(key: number, value: number, freq: number) {
    this.key = key
    this.value = value
    this.freq = freq
    this.next = null
    this.prev = null
  }
}
class LFUCache {
  head = new ChainNode(-Infinity, -Infinity, Infinity)
  tail = new ChainNode(Infinity, Infinity, -Infinity)
  capacity: number
  cache: Map<number, ChainNode> = new Map()
  constructor(capacity: number) {
    this.capacity = capacity
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(key: number): number {
    const { cache } = this
    if (cache.has(key)) {
      const node = cache.get(key)!
      this.deleteChain(node)
      this.pushChain(node)
      return node.value
    }

    return -1
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!
      node.value = value
      this.deleteChain(node)
      this.pushChain(node)
      return
    }
    const node = new ChainNode(key, value, 0)
    if (this.cache.size === this.capacity) {
      const node = this.tail.prev!
      this.deleteChain(node)
      this.cache.delete(node.key)
    }
    this.pushChain(node)
    this.cache.set(key, node)
  }

  deleteChain(node: ChainNode) {
    node.prev!.next = node.next
    node.next!.prev = node.prev
  }
  pushChain(node: ChainNode) {
    node.freq++

    let head = this.head.next!

    while (head && head.freq > node.freq) {
      head = head.next!
    }

    head.prev!.next = node
    node.prev = head.prev
    node.next = head
    head.prev = node
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

/*
// @lcpr case=start
// ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"][[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]\n
// @lcpr case=end

 */
