car = {
    "type" : "Mercedes",
    "color" : "silver",
    "year" : 2003,
    "model" : "ML",
    "engine" : {
        "type" : "V6",
        "fuel" : "diesel"
    },
    "vin" : "4JGAB57E43A410100"
}
if "engine" in car:
    print(car["engine"]["type"])
else:
    print("engine not found.")