# Here is a basic function that doesn't 
# return a value. We start with the 'def' 
# keyword, which tells Python that this is 
# a function. Next we have the name of 
# the function: 'print_my_age'. We also 
# allow a value to be passed in using the 
# 'age' variable, which is defined after 
# the function name in parentheses. 
def print_my_age(age):
	
	# Any code below the function definition 
	# that is indented will be executed as 
	# the body of the function
	print("I am:", age)

# Finally, we can call, or invoke, our 
# function using the function name and 
# passing it a value for 'age' in 
# parentheses
print_my_age(17)
print_my_age(42)
