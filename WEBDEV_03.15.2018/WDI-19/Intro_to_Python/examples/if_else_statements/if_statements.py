# Let's create a variable that we'll 
# evaluate using if statements
value = 10

# Now let's write an 'if' statement 
# that will check to see if our variable 
# has a value less that 11
if value < 11:
	print(value, "is less than 11")

# Remember, the 'if' statement will 
# execute for any evaluation that 
# returns true. Let's force the 
# evaluation to be true using the 
# 'not' keyword
if not (value > 11):
	print(value, "is not greater than 11")
