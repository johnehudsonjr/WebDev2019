
var move = () => {

    var jumper = document.getElementById("jumper")
    var pos = 325;
    var down = 0;
   
    
    var id= setInterval(frame, 20)
    
   
function frame(){
    if(pos < 600){
        pos++;
        jumper.style.marginLeft = pos + "px";
      
    }

  if (down < 350){
        down++;
        jumper.style.marginTop= down + "px";
    }

    else{
        clearInterval(id);
    }
}
}
    