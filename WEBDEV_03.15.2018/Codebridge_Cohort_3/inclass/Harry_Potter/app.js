
// function called addTextNode
var addTextNode = (text) =>{
    var newText = document.createTextNode(text);
    var question = document.getElementById("ques");
    question.appendChild(newText);
}

var addTextNode1 = (text) =>{
    $("#ques1").append("Gryffindor");
}