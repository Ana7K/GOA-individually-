lst1 = ['bla', 4]
lst2 = [3, 'bla', 'bla']

print(lst1 + lst2)
print("----------")

lst1.extend(lst2)
print(lst1)