/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 *
 * https://leetcode-cn.com/problems/design-linked-list/description/
 *
 * algorithms
 * Medium (28.91%)
 * Likes:    231
 * Dislikes: 0
 * Total Accepted:    44.5K
 * Total Submissions: 144.7K
 * Testcase Example:  '["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]\n' +
  '[[],[1],[3],[1,2],[1],[1],[1]]'
 *
 * 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next
 * 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
 * 
 * 在链表类中实现这些功能：
 * 
 * 
 * get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
 * addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index
 * 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
 * deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * MyLinkedList linkedList = new MyLinkedList();
 * linkedList.addAtHead(1);
 * linkedList.addAtTail(3);
 * linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
 * linkedList.get(1);            //返回2
 * linkedList.deleteAtIndex(1);  //现在链表是1-> 3
 * linkedList.get(1);            //返回3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 所有val值都在 [1, 1000] 之内。
 * 操作次数将在  [1, 1000] 之内。
 * 请不要使用内置的 LinkedList 库。
 * 
 * 
 */
class ListNode {
    val: number | null
    next: ListNode
    constructor (val = null, next?) {
        this.val = val
        this.next = next
    }
}



// @lc code=start
class MyLinkedList {
    head: ListNode
    tail: ListNode
    constructor() {
        this.head = new ListNode()
        this.tail = this.head
    }

    findPrevNode (index: number, list: ListNode): ListNode {
        if (index === 0) return list
        return this.findPrevNode(index - 1, list.next)
    }
    
    get(index: number): number {
        let node = this.findPrevNode(index, this.head)
       return node.next?.val ?? -1
    }

    addAtHead(val: number): void {
        this.head.next = new ListNode(val, this.head.next)
        if (this.head === this.tail) {
            this.tail = this.head.next
        }
    }

    addAtTail(val: number): void {
        this.tail.next = new ListNode(val)
        this.tail = this.tail.next
    }

    addAtIndex(index: number, val: number): void {
        let node = this.findPrevNode(index, this.head)
        node.next = new ListNode(val, node.next)
        if (node === this.tail) {
            this.tail = node.next
        }
    }

    deleteAtIndex(index: number): void {
        let node = this.findPrevNode(index, this.head)
        if (node.next === this.tail) {
            this.tail = node
        }
        node.next = node.next?.next
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

