
// To declare an array
// var nameOfArray = ["dataOne", "dataTwo", "dataThree", "dataFour"]

var colors = ["blue", "red","chartreuse","pink","orange"];

var food = ["shrimp", "lobster", "crabs", "salmon", "catfish"];

var nycBurroughs = ["Queens", "Brooklyn", "Manhattan","Bronx" ]

// ===== To find the length of an array you use .length property ===== 
// ====================================================================

// document.write("The length of this array is: " + colors.length)

// =====  last index is always length of an Array -1 =====
// ========================================================
// call last element in colors
// document.write(colors[colors.length-1])

// =====  last index is always length of an Array -1 =====
// ========================================================
// How do we access chartreuse?
// document.write(colors[2])

// =====  How to find items inside of an array =====
// ========================================================
// this pulls blue from colors and the letter e from blue
// always count arrays starting from 0
// document.write(colors[0][3])


// =====  How to find all values in array =====
//  for loop to access elements in an array
// ========================================================
// for loop SCI (starting position, condition, increment)
// var n = 0 

// for(counter= 0; counter < food.length; counter++){
//     document.write(food[counter] + "<br>")
// }

var nycBorroughs = ["Queens", "Brooklyn", "Manhattan", "Bronx"];

// for (counter=0; counter <= 2; counter++){
//     document.write(nycBurroughs[counter] + "<br>")
// }

// switches staten island to the number 2 space which is 3 space
// nycBorroughs[2] = "Staten Island";

// for(counter= 0; counter <= 2; counter++){
//     document.write(nycBorroughs[counter] +"<br>");
// }

// adds something to  an array
// nycBorroughs.push("Staten Island");
// for(counter= 0; counter <nycBorroughs.length; counter++){
//     document.write(nycBorroughs[counter] +"<br>");
// }

// removes last thing off of an array
// nycBorroughs.pop();
// for(counter= 0; counter <nycBorroughs.length; counter++){
//     document.write(nycBorroughs[counter] +"<br>");
// } .;l'

// counter = 0;
// var newArray = [];
// while(nycBorroughs.length > 0){

//     newArray.push(nycBorroughs.pop());
//     counter--;
// }
// document.write(newArray);

var nestedArray = [colors,food,nycBorroughs];
console.log(nestedArray);

var counter;
for(counter=0; counter< 3; counter++){
document.write(nestedArray[counter]+"<br>")
}