// NOTE: When using ES5 you must declare a function.
// function add(dog, cat, rabbit){
//     let elephant = dog + cat + rabbit
//     console.log(elephant);

// }
// add(5,7,8);

// NOTE: When using ES6 you use the word let and must add an arrow =>
let elephant = (dog,cat,rabbit) =>{
    // because the probblem asked for 3 variables you must use a comma in parenthesis
    //  these are called parameter (dog, cat, rabbit)
  console.log (dog + cat + rabbit);
//   console.log AKA PRINT the items in the parameters adding)
}
elephant(1,1,6)