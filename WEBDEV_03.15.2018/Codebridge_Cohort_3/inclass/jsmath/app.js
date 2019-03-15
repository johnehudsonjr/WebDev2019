// Step 1: Set the values of the inputs to variables so 
// they can be used in the function (getElementById)

// Step 2: Build a function to do the math 
// with those variables

// Step 3: Make a window alert that 
// tells the user the sum


// ======= ADDITION abc======
// ======= SUBTRACTION def=======
// ======= MULTIPLICATION ghi=======


var a;
var b;

var d;
var e;

var g;
var h;

var j;
var k;

var l;
var m;
var n;

//  ALL THINGS MUST GO INTO SET VALUE

var setValues = () => {
    a = Number (document.getElementById("additionOne").value);
    b = Number (document.getElementById("additionTwo").value);
    d = Number (document.getElementById("subtractionOne").value);
    e = Number (document.getElementById("subtractionTwo").value);
    g = Number (document.getElementById("multiplicationOne").value);
    h = Number (document.getElementById("multiplicationTwo").value);
    j = Number (document.getElementById("divisionOne").value);
    k = Number (document.getElementById("divisionTwo").value);
    l = Number (document.getElementById("playOne").value);
    m = Number (document.getElementById("playTwo").value);
    n = Number (document.getElementById("playThree").value);
    
    
}
// ======= ADDITION =======
// ======= ADDITION =======

var math = () => {
    setValues();
    z = a + b;
    window.alert(z);
}

// ======= SUBTRACTION =======
// ======= SUBTRACTION =======

var mathSub = () => {
    setValues();
    z = d - e;
    window.alert(z);
}

// ======= MULTIPLICATION =======
// ======= MULTIPLICATION =======

var mathMulti = () => {
    setValues();
     z = g * h;
    window.alert(z);

}

// ======= DIVISION =======
// ======= DIVISION =======

var mathDivision = () => {
    setValues();
    z = j / k;
    window.alert(z);
}

// ======= THREE INPUT PROBLEM =======
// ======= THREE INPUT PROBLEM =======

var threeInput = () => {
    setValues ();
    z = l + m + n;
    window.alert(z);
}