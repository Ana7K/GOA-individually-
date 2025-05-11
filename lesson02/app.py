# def main():
#     # print("Lomi")
#     return main()

# main() # "Lomi"


# car = ["blue", "2004", "BMW", "X5"]

car = {
    "type" : "BMW",
    "color" : "blue",
    "year" : 2004,
    "model" : "X5",
    "engine" : {
        "type" : "V8",
        "fuel" : "petrol"
    },
    'list': [1, 2, 3, 4, 5],
    "boolean": True,
    "none": None
}

# dictionary -ები ყოველთვის იწერებიან {}-ში
# მათ აქვს key და value

print(car["engine"]["fuel"])
# print (car.get("type"))
print(car.keys())

for i in car.keys():
    val = car[i]
    print(val)


print("----------------------------")
# 1D array
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


# matrix - 2D array
arr1 = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
]

# tensor - 3D array
arr2 = [
    [
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4]
    ],
    [
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4]
    ],
    [
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4]
    ],
    [
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4]
    ]
]

anything =  [
    {
    "name": "davit",
    "age":21
    },
    1,
    2,
    False,
    [1,2,3,4,5],
]
print(anything[-1][1])


print("----------------------------")

matrix = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
]
some_element = matrix[2],[3]
print (some_element)


print("----------------------------")

human = {
    "name" : "Ana"
}
human ["age"] = 21
human.pop("age")
human["name"] = "Davit"
human.update({"age": 21})
human.clear()
print(human)


print("----------------------------")

arr3 = [
    {
        "name": "davit"
    },
    {
        "name": "ana"
    },
    {
        "name": "lomi"
    },
    {
        "name": "nino"
    },
    {
        "name": "giorgi"
    },
    {
        "name": "mariami"
    }
]

# for dictt in arr:
#     print(dictt["name"])

    
print("-----------------------------------")

# ტუფლები / TUPLES  
tuple_example = (1,2,1,1,1,3,4,5) # immutable
print(tuple_example.count(1)) # 1 - ის რაოდენობა
print(tuple_example.index(1)) # 0 - index - ის პირველი ადგილი
tuple_example_2 = (1, 4)


a,b,c,d= (1, 2, 3,4)


a, b, *arr = (1,12313,123,123,123,123,12,312,312,3122,2,2,21,23,234,1234,1345,13453,45,345,2345,245,2345,234,5)
print(a,b)


print("---------------------------------------------------")

set_example = {1,1,1,1,1,1,1,1,2,3,4,5,9,"daa"} # mutable
set_example.add(1) # adding value to set
print(set_example)
print(3+5j) # complex number 