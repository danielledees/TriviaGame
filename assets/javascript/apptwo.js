//pseudo coding
//first page with start button
//when start button is clicked the timer and questions with multiple choice answers appear with done button at bottom
//when done button is clicked display how many correct/incorrect/unanswered 

//fstart button with onclick function
//array of questions and answers
//timer
//done button - score board 

var userGuess;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter = 30;
var record = {};
var isChecked = true;

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

//function to start game

$(document).ready(function() {

    $("#start-button").on("click", function() {
        startGame()

    })  

});

//function to display questions + answer options

function startGame(){
    $('#submitContainer').empty();
    $('.results').empty();
    $('#submitContainer').append('<button class="submit-button">Submit</button>');
    $("#start-button").hide()
    $('.time-left').text("time left:" + counter);
    for (var i = 0; i < questions.length; i++) {
        $(".question-box").append("<h2>" + questions[i].question +"</h2>");
    
    
            for (var j = 0; j < questions[i].answers.length; j++) {
                $(".question-box").append("<input type='radio' name='question-" +i+ "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }   
    }

    var timeInterval = setInterval(1000);
    var timeUp = setTimeout(1000*30);
    
  
    function setInterval() {
        $('.time-left').text("Time Left:" + counter);
                counter--;
                    if (counter <= 0) {
                      setTimeout();
                        clearInterval(timeInterval);
                        console.log("time is up");
                    }   
            
    }
        
};


//when submit button OR time runs out

if ($(".submit-button").on("click") || counter<=0)
{
//($(document).on("click", "submit-button") || counter <= 0 ) {
  $(".time-left").hide()
  $(".question-box").hide()
  $("#submitContainer").hide()
  

}
    for(var i = 0; i < questions.length; i++ ) {

        if (questions[i].correctAnswer === record["question-" + i]) {
            console.log(questions[i].question);
            console.log('answer is correct');
            correct++;
        }

        else if ($("input").is(":not(:checked)")){
            console.log(questions[i].question);
            console.log("you didnt answer stupid");
            unanswered++;
            }
        
        else if (questions[i].correctAnswer !== record["question-"]) 
        {
            console.log(questions[i].question); 
            console.log("WRONG");
            incorrect++;
        }
       
    }
    
$(document).on('click', "input", function(){
    var question =  $(this).attr('name');
    var guess = $(this).attr('guess');
     record[question] = guess;  
     
})

// print all correct and incorrect answers
$('.results').append("<h3>Correct Answers: "+correct+"</h3>");
$('.results').append("<h3>Incorrect Answers: "+incorrect+"</h3>");
// print questions not answered
$(".results").append()
$('.results').append("<h3>Unanswered: "+ unanswered+"</h3>");





 /* $.each($("input[name='question-0']:checked"),function() {
        if($(this).val()==questions[0].correctAnswer){
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-1']:checked"),function() {
        if($(this).val()==questions[1].correctAnswer){
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-2']:checked"),function() {
        if($(this).val()==questions[2].correctAnswer){
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-3']:checked"),function() {
        if($(this).val()==questions[3].correctAnswer){
            correct++;
        } else {
            incorrect++;
        }
      
    });*/

    








  




 
