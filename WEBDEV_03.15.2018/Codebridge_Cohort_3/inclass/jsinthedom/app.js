console.log("working")

// Globally declare a variable
var rabbit;
var change = () => {
    // take our variable and assign it 
    // the value of whatever html we want to change

    rabbit = document.getElementById("word");
    console.log(rabbit);

}

// var swatch = () => {
//     console.log("work work work");


// used .innerHTML to make changes to id html
var dog;

var swatch = () => {
    dog = document.getElementById ("miles");
    dog.innerHTML = "This is the change";
}

// use .getElementbyTagName

var changeTag = () => {
var cat = document.getElementsByTagName("h1")
console.log(cat);
cat.innerHTML = "This is a new cat!!!!"

}

// window.alert
var windowAlert = () => {
window.alert("this is cool");
}

// document.write

var documentWrite = () => {
    document.write("This is writing to the document");
}

// Doing math with a window alert
    // You can do math in window alert ex window.alert(x+y)

var math = () => {
    var x = 5;
    var y = 5;
    var z = x+y;
    window.alert(z);
}

