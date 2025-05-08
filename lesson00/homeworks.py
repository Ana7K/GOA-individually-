# 1
# https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/python
def remove_exclamation_marks(s):
    result = ''
    for char in s:
        if char != '!':
            result += char
    return result

# 2
# https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
def reverse_letter(st):
    _str = ""
    for char in st:
        if char.isalpha():
            _str += char
    return _str[::-1]

# 3
# https://www.codewars.com/kata/535474308bb336c9980006f2/train/python
def greet(name): 
    return f'Hello {name.capitalize()}!'

# 4
def calculator(x, y, op):
    if (type(x) != int) and (type(x) != float) or (type(y) != int) and (type(y) != float):
        return "unknown value"
    
    if op == '+':
        return x + y
    elif op == '-':
        return x - y
    elif op == '*':
        return x * y
    elif op == '/':
        if y == 0:
            return "unknown value" 
        return x / y
    else:
        return "unknown value"
    
# 5
# https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/python
def final_grade(exam, projects):
    if ((exam < 0) or (exam > 100)) or (projects < 0):
        return "unknown value"
    if (exam > 90) or (projects > 10):
        return 100
    elif (exam > 75) and (projects >= 5):
        return 90
    elif (exam > 50) and (projects >= 2):
        return 75
    else:
        return 0