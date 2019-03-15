# We will need to import the 'json' module 
# since we want to read json data from a 
# file
import json

# We will also need to import the 'pyplot' 
# module from 'matplotlib' so we can graph 
# the data from the file
import matplotlib.pyplot as plt

# Next, we create two lists to hold the data 
# we'll read in from the file
x_values = []
y_values = []

# Python allows us to easily get a handle to a 
# file using the 'with' statement
with open('georgia_unemployment.json') as file:

	# Now that we have a handle to the file, 
	# we can use the 'json' module to load 
	# the data into another variable
	data = json.load(file)

	# Once we have the data in a variable, we 
	# can use a for/in loop to load the data in 
	# the 'data' array into our 'x_values' and 
	# 'y_values' variables
	for entry in data["data"]:
		x_values.append(entry["year_month"])
		y_values.append(entry["rate"])

# Now that we have our x and y values for the 
# graph, we can use pyplot to graph them
plt.plot(x_values, y_values)

# We'll add a title and x and y labels to make 
# our graph more presentable
plt.title("2017 Unemployment: Georgia", fontsize=24)
plt.xlabel("Month", fontsize=18)
plt.ylabel("Rate (%)", fontsize=18)

# Finally, let's show our graph to the user!
plt.show()