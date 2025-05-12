car = {
    "firm" : "Ferrari",
    "color" : "red",
    "brand" : "F40"
}

for key, value in car.items():
    print(key, value)
print("------------------")

for value in car.values():
    print(value)
print("------------------")

for key in car.keys():
    print(key)

print("------------------")


paints = {
    "art_name" : "Mona Lisa",
    "artist" : "Leonardo da Vinci"
}

print(paints)
print("------------------")

copy_paints = paints.copy()
print(copy_paints)

print("------------------")

copy_paints1 = dict(paints)
print(copy_paints1)


print("---------------------------")
new_arr = [12,3,4,6,2,5]
new_arr.sort(reverse=True)
print(new_arr)
new_arr.sort(reverse=False)
print(new_arr)

print("---------------------------")
extend_arr = [12,6,3,5,2,23]
extend_arr.extend(["numbers"])
print(extend_arr)

print("---------------------------")
print("---------classwork---------")
print("---------------------------")


person = {
    "name" : "ana",
    "age" : 21,
    "pet" : False
}

for key in person:
    # print(person["age"])
    print(person[key])

print(person["name"])

print("---------------------------")

football_team = ["Barcelona", "Madrid", "Inter", "PSG"]

# copy_football_team = list(football_team)
# copy_football_team = dict(football_team)
# copy_football_team = set(football_team)
copy_football_team = tuple(football_team)

team1, team2, *rest_team = copy_football_team
print(rest_team)
print(copy_football_team)

print("---------------------------")

some_list1  = [i for i in range(20)]

print(some_list1)

some_list2 = []
for iteration in range(20):
    some_list2.append(iteration)

print(some_list2)