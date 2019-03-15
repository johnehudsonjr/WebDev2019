# Here is a function that does 
# return a value. Our function is 
# defined the same as in our previous 
# example except the last line uses 
# the return keyword to pass a value 
# back to the caller
def get_age_text(age):

	# The return keyword tells Python 
	# that the value specified after it 
	# should be passed back to the caller
	return "I am:" + str(age)

# This time, when we call our function, the 
# return value is stored in our variable
age_text = get_age_text(21)

# We can verify this by printing our 
# variable and seeing that it contains 
# the same value that our function returned
print(age_text)
