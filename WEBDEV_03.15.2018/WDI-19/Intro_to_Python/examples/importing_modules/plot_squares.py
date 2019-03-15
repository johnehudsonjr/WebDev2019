# Since we've already installed matplotlib 
# using pip3, we can import the pyplot 
# sub-module and alias it as 'plt'
import matplotlib.pyplot as plt

# Next, let's create a list of numbers for 
# the x values of our plot. Here, we're using 
# the build in 'range' function to generate 
# numbers 1-10, and passing them to the 'list' 
# function to create list to use in the plot
x_values = list(range(1, 11))

# Next, we're using a feature of Python known 
# as 'list comprehension' to square the values 
# in the 'x_values' list and copy them to the 
# 'y_values' list.
y_values = [x**2 for x in x_values]

# Now that we have our values, let's pass 
# them to the 'scatter' function of pyplot 
# to populate our graph, using points with 
# a size, 's', of 10
plt.scatter(x_values, y_values, s=10)

# For clarity, we'll give our graph a title 
# and labels for the x and y axes
plt.title("Square Numbers", fontsize=24)
plt.xlabel("Value", fontsize=14)
plt.ylabel("Square of Value", fontsize=14)

# We can also add tick marks for the major axes 
# and set the size of the axes labels to make 
# the graph look even better
plt.tick_params(axis="both", which="major", labelsize=14)

# Finally, let's show the graph!
plt.show()
