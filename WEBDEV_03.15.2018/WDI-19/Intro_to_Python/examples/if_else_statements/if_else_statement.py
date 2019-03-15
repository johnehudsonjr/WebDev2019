# Let's create a variable that we'll 
# evaluate using an if/else statement
value = 3

# Only one block in this statement 
# will evaluate to true. Since value 
# is not greater that 100, this 
# 'if' block will not execute
if value > 100:
	print("Large")

# In this case, our value is not 
# greater than 10 either, so the 
# 'elif' block will also be skipped
elif value > 10:
	print("Medim")

# Since there are no more 'elif' 
# blocks to evaluate, the 'else' 
# block gets executed
else:
	print("Small")

# Try changing the value of the 
# variable to make each of these 
# blocks execute
