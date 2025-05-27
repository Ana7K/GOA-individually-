class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __str__(self):
        return f"dog's name: {self.name}\ndog's age: {self.age}"
    def bark(self):
        return f"{self.name} is barking: woof woof"
    
d1 = Dog("bob", 5)
print(d1)
print(d1.bark())
print("------------------")

class Cat(Dog):
    def __init__(self, name, age):
        self.name = name
        self.age = age
        super().__init__(name, age)
    def __str__(self):
        return f"cat's name: {self.name}\ncat's age: {self.age}"
c1 = Cat("Tom", 3)
print(c1)
print(c1.bark())


print("------------------")

mytuple = ('apple', 'cherry')

myit = iter(mytuple)

print(next(myit))
print(next(myit))

mystr = 'banana'
myit = iter(mystr)
print(next(myit))

print("------------------")

