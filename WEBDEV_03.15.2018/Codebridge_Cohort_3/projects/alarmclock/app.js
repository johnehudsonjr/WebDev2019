
// Define what variables to use in the  program

var currentTime; 
var timeDisplay;
var alarmTime;
var isAlarmSet = false;

var sound = new Audio("../Sound/alarmsound.mp3"); 

sound.addEventListener('loadeddata',() => {
    var duration = sound.duration; // the duration variable now holds the duration (in seconds) of the audio clip  
    console.log(duration)
});
console.log(sound.volume);

var timeDisplay = document.getElementById("clock");

var getCurrentTime = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // Ig the hours is less than 12 use AM if not, use PM.
    // if hourse is less than 13, keep hours. If not, subtract 12 from that number.
    
    var ampm = date.getHours() < 12 ? 'AM' : 'PM';
    hours =  date.getHours() < 13 ? hours : hours - 12;
    hours = hours == 0 ?  12 : hours;
   
     return addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) +  ampm;

     
}
    // display current time by the second
    var tiktokthingy = setInterval(function(){
        
        //get the current time
        currentTime = getCurrentTime();
        //Is an Alarm actually set... 
        if(isAlarmSet){
            console.log("An Alarm is set ......");
            //If is set and we'll check to see if the it is time to WAKE UP!
            if(currentTime == alarmTime){
                //IF THIS IS TRUE WAKE UP!!!
                console.log("WAKE UP!!");
                sound.play();
                sound.loop = true;
            }

        }
    
        //Let the user know what time it is.
        timeDisplay.textContent = currentTime;
  
    },1000);


/*functions to get hour, min, secs, 
am or pm, add zero, set alarm time and sound, clear alarm
*/

function addZero(digits) {
    // If digits is less than 10, add a zero in front of the digits.If not, just show the digits.

    return (digits < 10) ? "0" + digits : digits;

}

function hoursMenu(){

    var select = document.getElementById('alarmhrs');
    var hrs = 12

    for (i=1; i <= hrs; i++) {
    select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);

    }
}
hoursMenu();

function minMenu(){

    var select = document.getElementById('alarmmins');
    var min = 59;

    for (i=0; i <= min; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
minMenu();

function secMenu(){

    var select = document.getElementById('alarmsecs');
    var sec = 59;

    for (i=0; i <= sec; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
secMenu();

// THIS IS THE ALARM FUNCTION.
function alarmSet() {

    var hr = document.getElementById('alarmhrs');
    var min = document.getElementById('alarmmins');
    var sec = document.getElementById('alarmsecs');
    var ap = document.getElementById('ampm');

// This is what happens when the user select something
    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;

    alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;


// ONCE THE DROPDOWN MENU IS CLICKED. DISABLE THE DROPDOWNS.
    document.getElementById('alarmhrs').disabled = true;
    document.getElementById('alarmmins').disabled = true;
    document.getElementById('alarmsecs').disabled = true;
    document.getElementById('ampm').disabled = true;

    isAlarmSet = true;


}
// THIS IS THE CLEAR ALARM FEATURE

function alarmClear() {

    document.getElementById('alarmhrs').disabled = false;
    document.getElementById('alarmmins').disabled = false;
    document.getElementById('alarmsecs').disabled = false;
    document.getElementById('ampm').disabled = false;
    sound.pause();
    isAlarmSet = false;
}
