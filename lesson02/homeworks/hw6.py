lst = [3, 5, 17, 5, 34, 23]
lst.remove(5) #first one
print(lst)

del lst[0:2]
print(lst)

lst.insert(0, 35)
print(lst)

res = lst[:2] + lst[:2]
print(res)

res = lst[:2] + lst[3:]
print(res)