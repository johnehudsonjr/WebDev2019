var move = () => {

var box = document.getElementById("box")
var pos = 0;
var down = 0;
var posts = 300;
var up  = 300;

var id= setInterval(frame, 5)

function frame(){
    if(pos < 300){
        pos++;
        box.style.marginLeft = pos + "px";
      
    }

  if (down < 300){
        down++;
        box.style.marginTop= down + "px";
    }
    // else if (posts > 0){
    //     posts--;
    //     box.style.marginLeft= posts + "px";
    // }
    // else if (up > 0){
    //     up--;
    //     box.style.marginTop= up + "px";
    // }
    else{
        clearInterval(id);
    }
}
}
