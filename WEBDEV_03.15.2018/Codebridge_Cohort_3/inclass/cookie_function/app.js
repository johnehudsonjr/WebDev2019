// let change = (paid,cost) =>{
//     let q;
//     q = (paid - cost) * 4;
//     console.log (q)
// }
// change(20,2)

// ===========COOKIE CHALLENGER BONUS 3 ===========
// 1. Need to be able to give back change
// 2. Decide on what loop
// 3. Declare variable
// 4. Find change



// ============== BONUS CHALLENGE UNIQLO SHIRT ==============

// Nando went to Uniqlo and bought himself a nice plaid shirt for $27.83. 
// He paid with $100 as he had no change. 
// The cashier paid in large denominations since they needed change for the other customers. 
// Write a loop that prints out how many bills he received in return in as large denominations as possible. 

// ======SOLUTION======
// BELOW this is a function written in ES6 (because it uses the let and the arrow =>)
// it also represents what will be subtracted from the challenge question above
// Subtraction is the function with paid,cost being the parameters AND paid-cost

let subtraction = (paid,cost) => paid-cost;{
 }

// BELOW will figuratively show up (CONSOLE. LOG) on "cash register" as the amount of 
//  money the customer gets back. This information is pulled from the function above
//  and represents how much Nando gave to cashier $100 and how much shirt cost $27.83
 console.log("  $" + subtraction(100,27.83))


//  BELOW change represents subtraction function from the amount paid and cost of shirt
let change = subtraction(100,27.83);

// BELOW is my while loop with if else statements
// this pulls the information from the change function above 
while (change>= 0){

 // BELOW  each if statement represents a unique bill and coin that should be dispensed
 // i.e. $100, $50, $20, $10...

 // if change is > 100
//  PRINT give customer $100 bill
// and subtract from $100
    if(change >= 100){
        console.log("give customer $100 bill")
        change-= 100
    }
    else if(change >= 50){
        console.log("give customer $50 bill")
        change-= 50
    }

    else if(change >= 20){
        console.log("give customer $20 bill")
        change-= 20
    }

    else if(change >= 10){
        console.log("give customer $10 bill")
        change-= 10
    }
    else if(change >= 5){
        console.log("give customer $5 bill")
        change-= 5
    }
    else if(change >= 1){
        console.log("give customer $1 bill")
        change-= 1
    }
    else if(change >= .50){
        console.log("give customer a half dollar")
        change-= .50
    }
    else if(change >= .25){
        console.log("give customer quarter")
        change-= .25
    }
    else if(change >= .10){
        console.log("give customer a dime")
        change-= .10
    }
    else if(change >= .05){
        console.log("give customer a nickel")
        change-= .05
    }
    else if(change >= .01){
        console.log("give customer a penny")
        change-= .01
    }
    else {
        console.log("This is your change.")
        break
    }
}