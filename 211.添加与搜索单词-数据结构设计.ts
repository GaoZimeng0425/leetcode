/*
 * @lc app=leetcode.cn id=211 lang=typescript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
// class WordDictionary {
//   list: Set<string> = new Set()
//   constructor() {}

//   addWord(word: string): void {
//     this.list.add(word)
//   }

//   search(word: string): boolean {
//     let flag = false
//     this.list.forEach((savedWord) => flag = flag || this.compare(savedWord ,word))
//     return flag
//   }
//   compare(word: string, chars: string): boolean {
//     if (word.length !== chars.length) return false
//     for (let i = 0; i < chars.length; i++) {
//       const char = chars[i]
//       if (char === '.') continue
//       if (char !== word[i]) return false
//     }
//     return true
//   }
// }

class WordDictionary {
  map: Record<string, any> = {}
  constructor() {}

  addWord(word: string): void {
    let tem = this.map
    for (const char of word) {
      if (!tem[char]) tem[char] = {}
      tem = tem[char]
    }
    tem.end = true
  }

  search(word: string): boolean {
    let tem = this.map
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (char === '.') {
        // let flag = false
        for (const key in tem) {
          if (this.search(`${word.slice(0, i)}${key}${word.slice(i + 1)}`)) {
            return true
          }
        }
        // Object.keys(tem).forEach((key) => {
        //   if (flag) return
        //   flag = this.search(`${word.slice(0, i)}${key}${word.slice(i + 1)}`)
        // })
        // return flag
      } else if (tem[char]) {
        tem = tem[char]
      } else {
        return false
      }
    }
    return !!tem.end
  }
}
/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
