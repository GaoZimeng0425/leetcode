--
-- @lc app=leetcode.cn id=175 lang=mysql
--
-- [175] 组合两个表
--

-- @lc code=start
# Write your MySQL query statement below
Select FirstName, LastName, City, State
From Person left join Address
on Person.PersonId = Address.PersonId

-- @lc code=end

