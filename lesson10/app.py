# 1
# https://www.codewars.com/kata/514b92a657cdc65150000006/train/python
def solution(number):
    if number < 0:
        return 0
    sum = 0
    for x in range(number):
        if x % 3 == 0 or x % 5 == 0:
            sum += x
    return sum

print(solution(10))

# 2
# https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python
def filter_list(l):
    'return a new list with the strings filtered out'
    result = []
    for item in l:
        if type(item) == int:
            result.append(item)
    return result