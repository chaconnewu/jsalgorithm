class Solution:
    # @param {integer} k
    # @param {integer} n
    # @return {integer[][]}
    def dfs(self, start, cur, rest):
      if (len(cur) > self.k or rest < 0):
        return

      if (len(cur) == self.k and rest == 0):
        self.res.append(cur)
      else:
        for i in range(start, 10):
          self.dfs(i+1, cur+[i], rest-i)

    def combinationSum3(self, k, n):
      self.res = []
      self.n = n
      self.k = k
      self.dfs(1, [], n)
      return self.res


s = Solution()
k = 3
n = 28
print s.combinationSum3(k, n)
