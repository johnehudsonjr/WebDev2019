// var x;

// for (x = 0; x <= 10; x++){
//     document.getElementById("demo").innerHTML += x + "<br>";

// }

// // demo 2
// var y;
// for(y=0; y<= 50; y +=5){
//     document.getElementById("demo2").innerHTML += y + "<br>";

// }

// // create a for loop that output numbers 1,3,5,7,,9 with line break

// var z;

// for(z=1; z<=9; z+=2){
//     document.getElementById("demo3").innerHTML += z + "<br>";
// }

// // create a while loop 5, 15, 45, 135, 405 with line breaks between each number. 
// var a = 5;
// while(a<405){
//    console.log(a);
//    x *= 3;
// }

// // Create a while LOOP that output the numbers 13, 65, 325,  with line breaks between each number. 

// var t = 13;

// while( t <= 325){

//    document.getElementById("demo5").innerHTML += t + "<br>";
//    t *= 5;
// }

var counter;

for (counter = 1; counter <=20; counter ++){

    if (counter % 2 == 0){
        console.log(counter + "This is even")
    }

    else if (counter % 3 == 0) {
        console.log (counter + "this is odd")
    }

    else if(counter == 1){
        console.log (counter + "this is odd")
    }

    else{
        console.log (counter + "This is prime")
    }
}