/*
 * @lc app=leetcode.cn id=2512 lang=typescript
 * @lcpr version=21917
 *
 * [2512] 奖励最顶尖的 K 名学生
 */

// @lc code=start
function topStudents(
  positive_feedback: string[],
  negative_feedback: string[],
  report: string[],
  student_id: number[],
  k: number
): number[] {
  const list: number[][] = []
  const map = new Map<string, number>()
  positive_feedback.forEach((word) => map.set(word, 3))
  negative_feedback.forEach((word) => map.set(word, -1))
  for (let i = 0; i < report.length; i++) {
    const words = report[i].split(' ')
    const count = words.reduce((total, word) => (total += map.get(word) ?? 0), 0)
    const id = student_id[i]
    list.push([id, count])
  }
  return list
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .slice(0, k)
    .map((item) => item[0])
}
// @lc code=end

/*
// @lcpr case=start
// ["xrezzxgdvg","bcgx","wcfzmfosr"]\n["qyouhus","ukou","eirhfbt","qciw","for"]\n["bcgx bcgx eirhfbt kvcrym bcgx cxzs eirhfbt wcfzmfosr v qciw","bcgx xrezzxgdvg bcgx xrezzxgdvg wcfzmfosr chap qyouhus biyt wcfzmfosr qciw","xrezzxgdvg wcfzmfosr ukou qcr clnj xrezzxgdvg gvtkvb qciw hi wcfzmfosr","for for mnxpqrdth bcgx bcgx qciw wcfzmfosr lspvgjvk wcfzmfosr eirhfbt","loxyg bcgx jwdesdu xrezzxgdvg wcfzmfosr rrych qyouhus wcfzmfosr klcwo xrezzxgdvg","rvbd wcfzmfosr lj xrezzxgdvg xuwguhgyyy fuz eirhfbt ukou h bcgx","bcgx wpmxyvbhc for qciw wcfzmfosr wjdm qyouhus qciw for xrezzxgdvg","bcgx sj xrezzxgdvg yjoklk bcgx hpc xrezzxgdvg lqfrvk xrezzxgdvg wcfzmfosr","qc wcfzmfosr jkjpgjalc tm v wcfzmfosr orgsqjzwa wcfzmfosr hh bfnxcx"]\n[686276715,934288178,625397331,519945877,864052244,971253305,512505036,865635090,281613863]\n9
// @lcpr case=end
// @lcpr case=start
// ["smart","brilliant","studious"]\n["not"]\n["this student isstudious","the student is smart"]\n[1,2]\n2\n
// @lcpr case=end

// @lcpr case=start
// ["smart","brilliant","studious"]\n["not"]\n["this student is notstudious","the student is smart"]\n[1,2]\n2\n
// @lcpr case=end

 */
