// each picture in the slideshow is in an array called picture
// these are the declared varriables that will go through while loop
var picture = ["../images/screensaver1.jpeg" , "../images/screensaver4.png", "../images/screensaver2.jpeg" , "../images/screensaver3.jpg"];
var basic_pic = 0;
var image_length = picture.length - 1;

// This is where the pictures will go through array via loop

var changepic = (num) => {
   while (basic_pic = basic_pic + num){
    if(basic_pic > image_length){
        basic_pic = 0;
    }
    if(basic_pic < 0){
        basic_pic = image_length;
    }
    document.getElementById("slide").src = picture[basic_pic];
    return false
}}