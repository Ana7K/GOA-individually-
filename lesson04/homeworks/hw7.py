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

copied_car = car.copy()
del car["engine"]

print(car)
print("------------------")
print(copied_car)