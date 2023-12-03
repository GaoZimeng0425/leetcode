/*
 * @lc app=leetcode.cn id=1507 lang=typescript
 *
 * [1507] 转变日期格式
 */

// @lc code=start
const month = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12'
}

function reformatDate(date: string): string {
  return date.replace(
    /(\d+)\w{2}\s(\w{3})\s(\d{4})/,
    (_, day: string, mon: string, year: string) => `${year}-${month[mon]}-${day.padStart(2, '0')}`
  )
}
// @lc code=end
