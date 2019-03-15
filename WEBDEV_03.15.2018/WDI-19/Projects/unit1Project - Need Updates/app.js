console.log("hello John")


// This is a globally scoped variable that will be used to update the scoreBoard box

let playerScore = 0

// ///////////////////////////////////////////
// //////////// Question Objects /////////////
// ///////////////////////////////////////////

//  Each category of questions have been placed in unique objects.

// College Mascot Questions in object form
let collegeMascotQuestions = [{
    question: "Buzz?",
    choices: ["Georgia Institute of Technology", "University of Georgia", "Georgia State University", "Kennesaw State University"],
    correctAnswer: 0,
    dollarValue:100
},
{
    question: "The Maroon Tiger?",
    choices: ["Georgia Institute of Technology", "University of Georgia", "Morehouse College", "Kennesaw State University"],
    correctAnswer: 2,
    dollarValue:200
},
{
    question: "Pounce?",
    choices: ["Georgia Institute of Technology", "University of Georgia", "Kennesaw State University", "Georgia State University"],
    correctAnswer: 3,
    dollarValue:300
},
{
    question: "Art The Bee?",
    choices: ["Georgia Institute of Technology", "University of Georgia", "Savannah College of Art and Design", "Georgia State University"],
    correctAnswer: 2,
    dollarValue: 400
}]

// ATLANTA HQ Questions in an OBJECT
let catHQQuestions = [{
    question: "Based in Atlanta, they are the place you go when you need to make improvements to your home.",
    choices: ["Lowe's", "Ace Hardware", "McClendon's Home Improvement", "The Home Depot"],
    correctAnswer: 3,
    dollarValue:100
},
{
    question: "This brand has more than 200 products ranging from slimming apparel and swimsuits, to bras, activewear and men’s undershirts.",
    choices: ["Spanx", "Fruit Of The Loom", "Hanes", "Jockey"],
    correctAnswer: 0,
    dollarValue:200
},
{
    question: "This company was named to Fortune’s top 50 Most Admired Companies in addition to being named the most admired airline for the seventh time in eight years.",
    choices: ["British Airways", "American Airlines", "Delta Airlines", "Alaska Airlines"],
    correctAnswer: 2,
    dollarValue:300

},
{
    question: "The world's largest package delivery company and one of the leading global providers of specialized transportation and logistics services.",
    choices: ["UPS", "USPS", "DHL", "Amazon Delivery Company"],
    correctAnswer: 0,
    dollarValue: 400
}]

// ATLANTA Sports Questions in an OBJECT
let catSportsQuestions = [{
    question: "Freddy is the name of the mascot for this team.",
    choices: ["The Atlanta Falcons", "The Atlanta Hawks", "Atlanta United", " The Atlanta Braves"],
    correctAnswer: 0,
    dollarValue:100
},
{
    question: "The professional basketball team here is known as...",
    choices: ["The Atlanta Hawks", "The Atlanta Storm", "The Atlanta Raiders", "The Atlanta Ballers"],
    correctAnswer: 0,
    dollarValue:200
},
{
    question: "This team just won the city its first major title in over 20 years",
    choices: ["The Atlanta Falcons", "The Atlanta Hawks", "Atlanta United", " The Atlanta Braves"],
    correctAnswer: 2,
    dollarValue:300
},
{
    question: "This team has the newest stadium in Atlanta",
    choices: ["The Atlanta Falcons", "The Atlanta Hawks", "Atlanta United", " The Atlanta Braves"],
    correctAnswer: 3,
    dollarValue: 400
}]

// ATLANTA VENUES Questions in an OBJECT
let catVenueQuestions = [{
    question: "If you want to catch a broadway show, go here.",
    choices: ["The Fox Theater", "The Broadway Show of Atlanta", "The Center Stage", "The Atlanta Theater Venue"],
    correctAnswer: 0,
    dollarValue:100
   
},
{
    question: "If you want to see puppets on stage, go here.",
    choices: ["The Fox Theater", "The Atlanta Puppet Theater", "The Center for Puppetry Arts", "The Puppet Place"],
    correctAnswer: 2,
    dollarValue:200
    
},
{
    question: "If you want to  here symphonic tunes, go here.",
    choices: ["Woodruff Arts Center", "Atlanta Symphony", "Symphony Center of Georgia", "ATL Symphony Zone"],
    correctAnswer: 0,
    dollarValue:300
    
},
{
    question: "If you want to see fine art, go here.",
    choices: ["Art Atlanta", "Atlanta Art Center", "Art Institute", " High Museum of Art"],
    correctAnswer: 3,
    dollarValue: 400

}]

// ///////////////////////////////////////////////
// //////////// Question Objects End /////////////
// ///////////////////////////////////////////////



// created class called questionItems which are key and values that each question contains.
// I used methods(functions) click, showAnswer, and pickAnswer to go through the process of when a user clicks the submit button,
// the questions that will show in the inner html as well as to validate the correct answer from the wrong answer.
class questionItems{
    constructor (question, correctAnswer, choices, dollarValue){
       this.question = question
       this.correctAnswer = correctAnswer
       this.choices = choices
       this.dollarValue = dollarValue
       this.dataSelection = 0
    }


    click(category){
        $("#showQuestion").html(this.question)

        $(category + this.dollarValue).css("background-color", "red")

        $("#firstchoice").html(this.choices)
        this.showAnswer()
        
    }

    showAnswer(){
        for(i=0; i<this.choices.length; i++){
            $('#select0'+i).html(this.choices[i])
        }

        $('.radio').on("click",() => this.pickAnswer())
    
    }

    
    // could not get the if else statement in this method to work correctly
    // .attr() is a jquery method that returns the value of a certain attribute. used this to find the data-choice that is placed on the radio class that is
    // selected by the user
    pickAnswer(){
        this.dataSelection = $('.radio:checked').attr('data-choice')

        if(this.dataSelection == this.correctAnswer){
          
          alert ("You got it right!")
            // playerScore = (playerScore + this.dollarValue)
            // $('.scoreCount').html(playerScore)
        }
        else{
            alert ("This is wrong!")
        }

    }

}

// ///////////////////////////////////////////
//       //////////// Loops /////////////
// ///////////////////////////////////////////


//  Created a for loop to go into the questions from the object and place them in a new array named after the category they represent.
// concat the beginning of the id as well as the number which is 0-4-
let collegeObjects = []

for (i=0; i<4; i++){
    let newCollegeObject = new questionItems(collegeMascotQuestions[i].question, collegeMascotQuestions[i].correctAnswer, collegeMascotQuestions[i].choices, collegeMascotQuestions[i].dollarValue)
    collegeObjects.push(newCollegeObject)
    $("#college" + (i*100+(100))).on("click", () => newCollegeObject.click('#college'))
}

let hqObjects = []

for (i=0; i<4; i++){
    let newHQObject = new questionItems(catHQQuestions[i].question, catHQQuestions[i].correctAnswer, catHQQuestions[i].choices, catHQQuestions[i].dollarValue)
    hqObjects.push(newHQObject)
    $("#hq" + (i*100+(100))).on("click", () => newHQObject.click('#hq'))
}

let sportsObjects = []
for (i=0; i<4; i++){
    let newSPORTSObject = new questionItems(catSportsQuestions[i].question, catSportsQuestions[i].correctAnswer, catSportsQuestions[i].choices, catSportsQuestions[i].dollarValue)
    sportsObjects.push(newSPORTSObject)
    $("#sports" + (i*100+(100))).on("click", () => newSPORTSObject.click('#sports'))
}

let venueObjects = []
for (i=0; i<4; i++){
    let newVENUEObject = new questionItems(catVenueQuestions[i].question, catVenueQuestions[i].correctAnswer, catVenueQuestions[i].choices, catVenueQuestions[i].dollarValue)
    venueObjects.push(newVENUEObject)
    $("#venue" + (i*100+(100))).on("click", () => newVENUEObject.click('#venue'))
}