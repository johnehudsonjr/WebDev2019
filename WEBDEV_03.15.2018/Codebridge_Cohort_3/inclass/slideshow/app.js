
//  create the array of images

var allPics = ["/images/balenciaga1.jpg","/images/balenciaga2.jpg","/images/balenciaga3.jpg","/images/balenciaga4.jpg","/images/balenciaga5.jpg"];
   
// =====imagesLength will always be the last image in the array
// ===== [array].length-1 will always go to the end of an array
var imagesLength = allPics.length-1;

// currentpic will be the position that we are at in the array
var currentpic =0 ;

//  STEP 1: create a function called changepic 

var changePic = (dog) =>{
    currentpic += dog;

    // to cycle pictures through from 1 to 5
if(currentpic > imagesLength){
  currentpic = 0
}

// to cycle backwards
if(currentpic < 0){
    currentpic = imagesLength
}

    document.getElementById("pic").src = allPics[currentpic];
}