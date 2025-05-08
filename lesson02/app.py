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
    "boolean": True,
}

print(car["engine"]["fuel"])
# print (car.get("type"))
print(car.keys())

for i in car.keys():
    val = car[i]
    print(val)


print("----------------------------")

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

# anything = [{

# }]
# print(anything[-1][1])


# print("----------------------------")
# matrix = [
#     [1,2,3,4],
#     [1,2,3,4],
#     [1,2,3,4],
#     [1,2,3,4]
# ]
# some_element = matrix([2],[3])
# print (some_element)


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

a, b, *arr = (1,12313,123,123,123,123,12,312,312,3122,2,2,21,23,234,1234,1345,13453,45,345,2345,245,2345,234,5)

print(a,b)