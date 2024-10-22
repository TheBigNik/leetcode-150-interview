class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        checker = {letter:magazine.count(letter) for letter in magazine}
        for letter, in ransomNote:
            if letter not in checker or checker[letter] <= 0:
                return False
            checker[letter] -= 1
                
        return True