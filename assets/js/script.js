/*Pseudocode

Start off with a page that introduces them to the quiz with a buttom that activates on click to continue to quiz

Have a timer at the top right that starts at 80 seconds.

Have the first question appear, and then have the timer goes down

If user answers correctly, move on to the next question

If user doesn't answer correctly, we subtract some time from the clock.

The game is over when the user answers all the questions, or the timer hits 0, and whatever time is left will be the users score.

Give the user their score and ask user to put in their initials. 

Need to make a question bank. Question bank will have one correct answer and 3 false ones.
Buttons for the questions
Need to make a timer count down.
if statements for the question and answer, if question is correct the nmove on, if not then subtract time.


*/

const questionBank = [
    {
        question: "Javascript is an _______ language?", 
        answers: [
            { text: "Procedural", correct: false},
            { text: "Object Oriented", correct: true},
            { text: "Object-Based", correct: false},
            { text: "None of the above", correct: false},
        ]
    },

    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: [
            { text: "var", correct: false},
            { text: "let", correct: false},
            { text: "Both A and B", correct: true},
            { text: "None of the above", correct: false},
        ]
    },

    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: [
            { text: "getElementbyId()", correct: false},
            { text: "getElementsByClassName()", correct: false},
            { text: "Both A and B", correct: true},
            { text: "None of the above", correct: false},
        ]
    },

    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answers: [
            { text: "Ignores the statements", correct: true},
            { text: "Throws an error", correct: false},
            { text: "Gives us a warning", correct: false},
            { text: "None of the above", correct: false},
        ]
    },

    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        answers: [
            { text: "Undefined", correct: false},
            { text: "Boolean", correct: false},
            { text: "Integer", correct: false},
            { text: "Object", correct: true},
        ]
    }
];

//console.log(questionBank[0]); //Checking to see if my question bank is working

var question = document.getElementById("question");
var answerButton = document.getElementById("answer-button");
var nextButton = document.getElementById("next-button");
var submitButton = document.getElementById("submit-button");
var selectedAnswer1 = document.getElementById("first-choice");
var selectedAnswer2 = document.getElementById("second-choice");
var selectedAnswer3 = document.getElementById("third-choice");
var selectedAnswer4 = document.getElementById("fourth-choice");
var timerEl = document.getElementById('countdown');
var initialInput = document.querySelector("#initials");
var viewScore = document.getElementById('view-score');
var message = document.getElementById("message");

message.textContent = ""; //Need this to not get null error message when submitting

var currentQuestionNumber = 0;
let score = 0;
var timeLeft = 30;

function startPage(){

    //Hide the buttons in start page

    document.getElementById("first-choice").style.display = "none";
    document.getElementById("second-choice").style.display = "none";
    document.getElementById("third-choice").style.display = "none";
    document.getElementById("fourth-choice").style.display = "none";
    document.getElementById("initials").style.display = "none";
    document.getElementById("submit-button").style.display = "none";

    question.textContent = "Welcome to the Javascript quiz! Click next to begin";

    //Makes so when the next is clicked, the quiz begins

    nextButton.addEventListener("click",function(){
        displayQuestion();
    })
    
}

function displayQuestion(){

    //Reveal buttons again and hide next button

    document.getElementById("first-choice").style.display = "block";
    document.getElementById("second-choice").style.display = "block";
    document.getElementById("third-choice").style.display = "block";
    document.getElementById("fourth-choice").style.display = "block";
    document.getElementById("next-button").style.display = "none"; 
    document.getElementById("view-score").style.display = "none";


    question.textContent = questionBank[currentQuestionNumber].question;
    selectedAnswer1.textContent = questionBank[currentQuestionNumber].answers[0].text;
    selectedAnswer2.textContent = questionBank[currentQuestionNumber].answers[1].text;
    selectedAnswer3.textContent = questionBank[currentQuestionNumber].answers[2].text;
    selectedAnswer4.textContent = questionBank[currentQuestionNumber].answers[3].text;

    //console.log(questionBank.length);
    // countdown();

    answerQuestion();
  
    

}

function answerQuestion(){

    //Timer
    
    var timeInterval = setInterval(function () {

    timeLeft--;
    timerEl.value = timeLeft;
    timerEl.textContent = timeLeft + " seconds left.";

    if(timeLeft <= 0)
    {
        clearInterval(timeInterval);
        displayGameOverMessage();
    }

    }, 1000);


     //Below are the button logics. If you select the button and it is true, then you move on to the next question. If false, you lose time and stay on the current question.

    selectedAnswer1.addEventListener("click",function(){
        
        if (selectedAnswer1.textContent = questionBank[currentQuestionNumber].answers[0].correct == true){
            //console.log("Correct!");

            //If the button selected is correct, you go onto the next question, and the next question is updated along with the buttons as long as there is an next question.

            if(currentQuestionNumber <= questionBank.length){

                currentQuestionNumber++;
                console.log(currentQuestionNumber);

                if(currentQuestionNumber == questionBank.length)
                {
                    clearInterval(timeInterval);
                    completedQuiz();
                }
                else{

                    question.textContent = questionBank[currentQuestionNumber].question;
                    selectedAnswer1.textContent = questionBank[currentQuestionNumber].answers[0].text;
                    selectedAnswer2.textContent = questionBank[currentQuestionNumber].answers[1].text;
                    selectedAnswer3.textContent = questionBank[currentQuestionNumber].answers[2].text;
                    selectedAnswer4.textContent = questionBank[currentQuestionNumber].answers[3].text;

                }                
            }       
        }
        else{
            //console.log("Incorrect!");
            timeLeft = timeLeft - 5;
        }
    })

    selectedAnswer2.addEventListener("click",function(){
        
        if (selectedAnswer2.textContent = questionBank[currentQuestionNumber].answers[1].correct == true){
            //console.log("Correct!");

            if(currentQuestionNumber <= questionBank.length){

                currentQuestionNumber++;

                if(currentQuestionNumber == questionBank.length)
                {
                    clearInterval(timeInterval);
                    completedQuiz();
                }
                else
                {
                    question.textContent = questionBank[currentQuestionNumber].question;
                    selectedAnswer1.textContent = questionBank[currentQuestionNumber].answers[0].text;
                    selectedAnswer2.textContent = questionBank[currentQuestionNumber].answers[1].text;
                    selectedAnswer3.textContent = questionBank[currentQuestionNumber].answers[2].text;
                    selectedAnswer4.textContent = questionBank[currentQuestionNumber].answers[3].text;
                }
            }
        }
        else{
           //console.log("Incorrect!");
            timeLeft = timeLeft - 5;
        }
    })

    selectedAnswer3.addEventListener("click",function(){
        
        if (selectedAnswer3.textContent = questionBank[currentQuestionNumber].answers[2].correct == true){
            console.log("Correct!");

            if(currentQuestionNumber <= questionBank.length){

                currentQuestionNumber++;

                if(currentQuestionNumber == questionBank.length)
                {
                    clearInterval(timeInterval);
                    completedQuiz();
                }

                else
                {
                    question.textContent = questionBank[currentQuestionNumber].question;
                    selectedAnswer1.textContent = questionBank[currentQuestionNumber].answers[0].text;
                    selectedAnswer2.textContent = questionBank[currentQuestionNumber].answers[1].text;
                    selectedAnswer3.textContent = questionBank[currentQuestionNumber].answers[2].text;
                    selectedAnswer4.textContent = questionBank[currentQuestionNumber].answers[3].text;
                }
            }
        }
        else{
            //console.log("Incorrect!");
            timeLeft = timeLeft - 5;
        }
    })

    selectedAnswer4.addEventListener("click",function(){
        
        if (selectedAnswer4.textContent = questionBank[currentQuestionNumber].answers[3].correct == true){
            console.log("Correct!");

            if(currentQuestionNumber <= questionBank.length){

                currentQuestionNumber++;

                if(currentQuestionNumber == questionBank.length)
                {
                    clearInterval(timeInterval);
                    completedQuiz();
                }
                else
                {
                    question.textContent = questionBank[currentQuestionNumber].question;
                    selectedAnswer1.textContent = questionBank[currentQuestionNumber].answers[0].text;
                    selectedAnswer2.textContent = questionBank[currentQuestionNumber].answers[1].text;
                    selectedAnswer3.textContent = questionBank[currentQuestionNumber].answers[2].text;
                    selectedAnswer4.textContent = questionBank[currentQuestionNumber].answers[3].text;
                }
                
            }
        }
        else{
            //console.log("Incorrect!");
            timeLeft = timeLeft - 5;
        }
    })
}


  function displayGameOverMessage() {

    //We'll give the player a game over screen and take away all the answer choices. Will add a box for them to put their initials to save hteir high score.

    timerEl.textContent = "GAME OVER";
    question.textContent = "Please enter your initials to save your score!";
    document.getElementById("initials").style.display = "block";
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("first-choice").style.display = "none";
    document.getElementById("second-choice").style.display = "none";
    document.getElementById("third-choice").style.display = "none";
    document.getElementById("fourth-choice").style.display = "none";

    submitButton.addEventListener("click",function(){

        var finalScore = 
        {
            initials: initials.value,
            score: timeLeft 
        };
        localStorage.setItem("userScore", JSON.stringify(finalScore));
        message.textContent = "Thank you for your submission";

    })
  }


  function completedQuiz(){
    question.textContent = "Congratulations you've completed the quiz! Please Enter your initials! Your score is: " + timeLeft;
    clearInterval(timerEl);
    timerEl.textContent = " ";
    document.getElementById("initials").style.display = "block";
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("first-choice").style.display = "none";
    document.getElementById("second-choice").style.display = "none";
    document.getElementById("third-choice").style.display = "none";
    document.getElementById("fourth-choice").style.display = "none";

    


    submitButton.addEventListener("click",function(){

        var finalScore = {
            initials: initials.value,
            score: timeLeft 
        };
        localStorage.setItem("userScore", JSON.stringify(finalScore));
        message.textContent = "Thank you for your submission";


    })  
  }

 
startPage();
