print("Hello, World!")
# ES una comentarion xd 



x = 5
y = "John"
print(x)
print(y)




x = 5
y = "John"
print(type(x))
print(type(y))



x = str(3)
y = int(3)
z = float(3)

print(x)
print(y)
print(z)


print(bool("Hello"))
print(bool(15))



# Operadores
print(10 + 5)


# +
# -
# *
# /
# %
# **
# //



thislist = ["apple", "banana", "cherry"]

thislist.append("orange")

print(thislist)



thislist = ["apple", "banana", "cherry"]
thislist.remove("banana")
print(thislist)



thislist = ["apple", "banana", "cherry"]
thislist.pop(1)
print(thislist)



# Los Metodos lo Buscas En donde: https://www.w3schools.com/python


a = 33
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")




  thislist = ["apple", "banana", "cherry"]
print(len(thislist))





def my_function():
  print("Hello from a function")


  def my_function():
  print("Hello from a function")
  


  a = "Hello, World!"
print(a.lower())




a = " Hello, World! "
print(a.strip())



a = "Hello, World!"
print(a.replace("H", "J"))



a = "Hello, World!"
b = a.split(",")
print(b)

a = "Hello, World!"
print(a.upper())




# Array: cars = ["Ford", "Volvo", "BMW"]


<!-- Los Importaciones: Import Mymodule -->



import datetime

x = datetime.datetime.now()

print(x)
# The try block will generate an error, because x is not defined:

try:
  print(x)
except:
  print("An exception occurred")



username = input("Enter username:")
print("Username is: " + username)
