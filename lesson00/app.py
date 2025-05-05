name = "Giorgi"
for char in name:
    print(char)

# task1
# RemoveExclamationMarks which removes all exclamation marks from a given string.
def remove_exclamation_marks(s):
    result = ''
    for char in s:
        if char != '!':
            result += char
    return result

# 2
# 3

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