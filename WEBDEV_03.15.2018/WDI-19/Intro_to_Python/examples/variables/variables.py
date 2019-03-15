# Here we're declaring two variables 
# 'name' and 'age' and setting them 
# to their respective values
name = "Mike Sanders"
age = 42

# Printing 'name' and 'age' shows us 
# that the variable values have been 
# stored
print("1st pass:", name, age)

# Now, let's swap the values of 'name' 
# and 'age' and see what happens
name = 42
age = "Mike Sanders"

# As we suspected, their values are 
# successfully printed even though 
# we set a string value for a variable 
# that used to be a number and vice 
# versa. This works because Python 
# is not strictly typed and doesn't 
# care what value we assign to a 
# variable at any given time.
print("2nd pass:", name, age)

# Boolean variables contain the value 
# 'True' or 'False'. Capitalization is 
# important here as the Python interpreter 
# will see 'true' and 'false' as variable 
# names.
bool_true = True
bool_false = False
print(bool_true, "and", bool_false)
