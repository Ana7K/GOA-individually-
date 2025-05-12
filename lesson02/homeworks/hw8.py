man = {
    "name" : "Giorgi",
    "age" : 25,
    "pet" : "dog"
}

man.update({"age": 26})
print(man)

man.pop("name")
print(man)
del man["age"]
print(man)
man.popitem()
print(man)