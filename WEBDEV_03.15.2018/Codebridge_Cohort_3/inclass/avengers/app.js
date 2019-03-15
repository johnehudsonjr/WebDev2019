//  step 1 created a function to add the new avenger
//  step 2  line 9 assigned a variable to the creation of a new li
// step 3 took that new li and changed the text content to the string loki
//  grabbed the entire list
// appendChild to add that newMember to the list

// var addAvenger = () => {
//    var newMember = document.createElement("li");
//    newMember.textContent = ('Loki');
//    document.getElementById("avengersList").appendChild(newMember);
// }

// BELOW  create function to add new avenger EXECUTED after button is clicked
var addAvenger = () =>{
    // BELOW - The below variable grabs the value that has been input in the text field
    var newGuy = document.getElementById("newGuy").value;
    // BELOW - The below variable creates a new li variable
    var newMember = document.createElement("li");
    // BELOW takes that newly created li  and changes the content to
    // whatever was in our input field
    newMember.textContent = (newGuy);
    document.getElementById("avengersList").appendChild(newMember);
    var list = []
}

var deleteAvenger = () =>{
    var list = document.querySelector('ul');
    var lastItem = document.querySelector('li');

    list.removeChild(lastItem);
}