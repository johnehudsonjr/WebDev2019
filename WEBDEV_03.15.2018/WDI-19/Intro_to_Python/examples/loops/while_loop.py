# Here is a list of numbers 
# that we'll sum using a while loop
numbers = [1, 2, 3, 4, 5]

# The sum variable will hold the 
# value of the sum of the numbers 
# as we add them
sum = 0

# The 'i' variable is used to keep track 
# of our place in the list as we loop 
# over them
i = 0

# We want to keep adding the numbers 
# until we have reached the end of the 
# list
while i < len(numbers):
	# Get the number in the list at 
	# position 'i' and add it to sum
	sum += numbers[i]

	# Now we need to add one to our 
	# placeholder variable to move 
	# to the next position in the list
	i += 1

# Now that we've added all the numbers in 
# the list, we can print out our sum. 
# Notice that this line is executed after 
# the 'while' loop due to the fact that 
# it is not indented the same as lines 21 
# and 26.
print("The sum is:", sum)
