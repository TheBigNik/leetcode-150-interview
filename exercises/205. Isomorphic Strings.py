class Solution(object):
    def isIsomorphic(self, s, t):
        ind1 = []
        ind2 = []
        for ind in s:
            ind1.append(s.index(ind))

        for ind in t:
            ind2.append(t.index(ind))

        if ind1 == ind2:
            return True
        return False
