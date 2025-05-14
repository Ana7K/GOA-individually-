car = {
    "type" : "Mercedes",
    "color" : "silver",
    "year" : 2003,
    "model" : "ML",
    "engine" : {
        "type" : "V6",
        "fuel" : "diesel"
    }
}

print("dict-car keys:")
for key in car.keys():
    print(key)

print("dict-car values:")
for val in car.values():
     print(val)

print("dict-car keys and values:")
for key, value in car.items():
    print(key, value)