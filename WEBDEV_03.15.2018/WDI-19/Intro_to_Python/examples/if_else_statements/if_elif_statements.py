# Let's create a variable that we'll 
# evaluate using an if/elif statement
value = 50

# Only one block in this statement 
# will evaluate to true. Since 'value' 
# is not greater that 100, this 
# 'if' block will not execute
if value > 100:
	print("That's a big value!")
	
# However, 'value' is greater that 10, 
# so this 'elif' will evaluate to true 
# and it's code block will execute
elif value > 10:
	print("That's a medium value...")

# Try changing the value of the 
# variable to make the first 'if' block 
# execute