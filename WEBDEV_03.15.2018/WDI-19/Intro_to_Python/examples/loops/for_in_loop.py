# Here is a list of numbers 
# that we'll sum using a for/in loop
numbers = [1, 2, 3, 4, 5]

# The sum variable will hold the 
# value of the sum of the numbers 
# as we add them
sum = 0

# We want to keep adding the numbers 
# until we have reached the end of the 
# list. In this case, each value in 
# the numbers list is assigned to the 
# 'number' variable as we loop over the 
# list. The position is also updated 
# for us, so there's no need for a 
# positional variable - such as 'i' 
# from our while loop example
for number in numbers:
	# Since the next value in the list 
	# is assigned to number automatically, 
	# we only need to add number to our 
	# sum variable
	sum += number

# Now that we've added all the numbers in 
# the list, we can print out our sum
print("The sum is:", sum)
