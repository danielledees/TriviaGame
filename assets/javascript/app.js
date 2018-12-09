//first page with start button
//when start button is clicked the timer and questions with multiple choice answers appear with done button at bottom
//when done button is clicked display how many correct/incorrect/unanswered 

//start button with onclick function
//array of questions and answers
//timer
//done button - score board 

var userGuess;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter = 15;
var record = {};
var isChecked;

var questions = [
    {
    question: "Which band sings the song 'Creep'?",
    answers: ["AudioSlave", "Red Hot Chili Peppers", "Radiohead", "Nine Inch Nails"],
    correctAnswer: "Radiohead" 
},
{
    question: "Which band sings the song 'Closer'?",
    answers: ["AudioSlave", "Red Hot Chili Peppers", "Radiohead", "Nine Inch Nails"],
    correctAnswer: "Nine Inch Nails" 
},
{
    question: "Which band sings the song 'Under the Bridge'?",
    answers: ["AudioSlave", "Red Hot Chili Peppers", "Radiohead", "Nine Inch Nails"],
    correctAnswer: "Red Hot Chili Peppers" 
},
{
    question: "Which band sings the song 'Like a Stone'?",
    answers: ["AudioSlave", "Red Hot Chili Peppers", "Radiohead", "Nine Inch Nails"],
    correctAnswer: "AudioSlave" 
}
];

$(document).ready(function() {

    $("#start-button").on("click", function() {
        startGame()

    })  
});


//function to start game

function startGame(){
    $('#submitContainer').empty();
    $('.results').empty();
    $('#submitContainer').append('<button class="submit-button">Submit</button>');
    $("#start-button").hide()
    $('.time-left').text("time left:" + counter);
    for (var i = 0; i < questions.length; i++) {
        $(".question-box").append("<h2>" + questions[i].question +"</h2>");
    
            for (var j = 0; j < questions[i].answers.length; j++) {
                $(".question-box").append("<input type='radio' name='question-" +i+ "' guess='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }   
    }

    //record of user input
    $(document).on('click', "input", function(){
        var questions =  $(this).attr('name');
        var guess = $(this).attr('guess');
         record[questions] = guess;  
        isChecked = $("input").is(":not(:checked)")
         console.log(record);
         


    })
//timer
var timeInterval = setInterval(timer, 1000);

    function timer() {
        $('.time-left').html("Time Left:" + counter);
            counter--;
                
            if (counter <= 0) {
                console.log("time is up");
                clearInterval(timeInterval);
                endGame()
                            }  
    }       
}

//function to end game when submit button clicked or time runs out

$(document).on("click", ".submit-button", function() {
    endGame()
    
})

    function endGame() {
    $(".question-box").hide()
    $("#submitContainer").hide()
    $(".time-left").hide()
    $("counter").empty()
    
 //check if user guess is correct or left blank
    for(var i = 0; i < questions.length; i++ ) {

        if (questions[i].correctAnswer === record["question-" + i]) {
            console.log(questions[i].record);
            console.log('answer is correct');
            correct++;
            
        }

        else if (questions[i].correctAnswer !== record["question-"]) 
        {
            console.log(questions[i].question); 
            console.log("WRONG");
            incorrect++;
        }

        else if (isChecked===true) //(questions[i].correctAnswer === blankGuess)
        {
            console.log(questions[i].question);
            console.log("you didnt answer stupid");
            unanswered++;
            }
            //I've tried a million different ways to get the unanswered to work but I'm stuck.  
        
        } 
  
  
// display results
$('.results').html("<h1>All Done!  Your results:</h1>")
$('.results').append("<h3>Correct Answers: "+correct+"</h3>");
$('.results').append("<h3>Incorrect Answers: "+incorrect+"</h3>");
$('.results').append("<h3>Unanswered: "+ unanswered+"</h3>");

    };

//I can't figure out why the results run twice


  




 
