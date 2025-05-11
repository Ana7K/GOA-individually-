lst = [
    {
    "name" : "mixo",
    "age" : 45
    },
    {
    "name" : "bichikia",
    "age" : 35
    },
    {
    "name" : "mari",
    "age" : 14
    },
    {
    "name" : "ana",
    "age" : 21
    }
]

for anyone in lst:
    if anyone["age"] > 18:
        print(anyone["name"])