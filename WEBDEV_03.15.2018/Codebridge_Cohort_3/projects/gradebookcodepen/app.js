// STEP 3
// Create a variable that is globally scoped...
// this means it can be used throughout function.
//  var z;

// STEP 4
// create function using e6

// var displayGrade = (z) => {

// }

var z;

// e5 function displaygrade(z) ={}

var displayGrade = (z) => {
    z = Number(document.getElementById("a").value);
 
  if(z >=90){
   window.alert("This is an A.")
  }

  else if(z >=80){
   window.alert("This is a B.")
  }

  else if(z >=75){
    window.alert("This is a C.")
   }

   else if(z >=70){
    window.alert("This is a D.")
   }
 
 
  else{
   window.alert("This is a F.")
  }
}

// Number()