/*
 * @lc app=leetcode.cn id=705 lang=typescript
 *
 * [705] 设计哈希集合
 *
 * https://leetcode-cn.com/problems/design-hashset/description/
 *
 * algorithms
 * Easy (57.69%)
 * Likes:    157
 * Dislikes: 0
 * Total Accepted:    56K
 * Total Submissions: 86K
 * Testcase Example:  '["MyHashSet","add","add","contains","contains","add","contains","remove","contains"]\n' +
  '[[],[1],[2],[1],[3],[2],[2],[2],[2]]'
 *
 * 不使用任何内建的哈希表库设计一个哈希集合（HashSet）。
 * 
 * 实现 MyHashSet 类：
 * 
 * 
 * void add(key) 向哈希集合中插入值 key 。
 * bool contains(key) 返回哈希集合中是否存在这个值 key 。
 * void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * ["MyHashSet", "add", "add", "contains", "contains", "add", "contains",
 * "remove", "contains"]
 * [[], [1], [2], [1], [3], [2], [2], [2], [2]]
 * 输出：
 * [null, null, null, true, false, null, true, null, false]
 * 
 * 解释：
 * MyHashSet myHashSet = new MyHashSet();
 * myHashSet.add(1);      // set = [1]
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(1); // 返回 True
 * myHashSet.contains(3); // 返回 False ，（未找到）
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(2); // 返回 True
 * myHashSet.remove(2);   // set = [1]
 * myHashSet.contains(2); // 返回 False ，（已移除）
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 最多调用 10^4 次 add、remove 和 contains 。
 * 
 * 
 * 
 * 
 * 进阶：你可以不使用内建的哈希集合库解决此问题吗？
 * 
 */

// @lc code=start
class MyHashSet {
    list: number[]
    constructor() {
        this.list = []
    }

    add(key: number): void {
        if (this.contains(key)) return
        this.list.push(key)
    }

    remove(key: number): void {
        let index = this.find(key)
        if (index === -1) return
        this.list.splice(index, 1)
    }
    find (key: number) {
        return this.list.indexOf(key)
    }
    contains(key: number): boolean {
        return this.find(key) > -1
    }
}

// class LinkList {
//     val: number | null
//     next: LinkList
//     constructor(val) {
//         this.val = val
//     }
// }

// class MyHashSet {
//     head: LinkList
//     tail: LinkList
//     constructor() {
//         this.head = new LinkList(null)
//         this.tail = this.head
//     }
//     protected findPrevNode (key: number, list: LinkList | null): LinkList {
//         if (list.next == null) return null
//         if (list.next.val === key) {
//             return list
//         } else {
//             return this.findPrevNode(key, list.next)
//         }
//     }

//     add(key: number): void {
//         if (this.findPrevNode(key, this.head)) return
//         this.tail.next = new LinkList(key)
//         this.tail = this.tail.next
//     }

//     remove(key: number): void {
//         const prevList = this.findPrevNode(key, this.head)
//         if (prevList) {
//             if (prevList.next === this.tail) {
//                 this.tail = prevList
//             }
//             prevList.next = prevList.next.next
//         }
//     }

//     contains(key: number): boolean {
//         return !!this.findPrevNode(key, this.head)
//     }
// }

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

