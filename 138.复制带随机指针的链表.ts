/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

const createNode = (head: Node, map: Map<Node, Node>): Node | null => {
	if (head === null) return null
	if (map.has(head)) return map.get(head)
	const { val, next, random } = head
	const n: Partial<Node> = { val }
	map.set(head, n as Node)
	n.next = createNode(next, map)
	n.random = createNode(random, map)
	return n as Node
}
function copyRandomList(head: Node | null): Node | null {
	const map: Map<Node, Node> = new Map()
	createNode(head, map)
	return map.get(head)
}
// @lc code=end
