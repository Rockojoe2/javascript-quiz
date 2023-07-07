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

//Question bank with the question and answers. the Question text and button texts should update based off of this question bank.

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

//Our global variables. Assigning variables based on the ID so I can change them whenever. EX: Can change the text that has a "question" id because I defined the variable below by just doing question.textContent = "anything". Assigning these global variables helps me change them to how I want throughout the code easier.

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
var highScore = 0;

function startPage(){

    //Hide the answer choice buttons in start page

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

    //This will display the very first question. currentQuestionNumber is defined globally as 0, so we are getting the first question, and the answer choices to the first question.

    question.textContent = questionBank[currentQuestionNumber].question;
    selectedAnswer1.textContent = questionBank[currentQuestionNumber].answers[0].text;
    selectedAnswer2.textContent = questionBank[currentQuestionNumber].answers[1].text;
    selectedAnswer3.textContent = questionBank[currentQuestionNumber].answers[2].text;
    selectedAnswer4.textContent = questionBank[currentQuestionNumber].answers[3].text;

    //console.log(questionBank.length);
    // countdown();

    //Answer question has the logic of when the user answers the question. If it's true, it will go onto the next question, if not, time is deducted. Timer is also in this function and immediately starts as soon as the quiz begins.

    answerQuestion();
  
    

}

//answerQuestion function has the logic. If the user answers the question correctly, we go to the next question, if not, user loses time.

function answerQuestion(){

    //Timer for the quiz. It starts automatically when the user starts the quiz because it's not tied up to any conditional statement. Put the timer here because it was easier to manipulate the time if the variables were in the same function.
    
    var timeInterval = setInterval(function () {

    timeLeft--;
    timerEl.value = timeLeft;
    timerEl.textContent = timeLeft + " seconds left.";

    //Made it <=0 because you could get a negative number if there was for example 3 seconds left, and the user got the question wrong. This if statement makes it so that if timeLeft is 0 or below, we clear the timeInterval and then display our displayGameOverMessage function.

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

            //If the button selected is correct, you go onto the next question, and the next question is updated along with the buttons as long as there is an next question. The same logic is used for every button.

            if(currentQuestionNumber <= questionBank.length){

                currentQuestionNumber++;
                console.log(currentQuestionNumber);

                //This if statement is needed because if this isn't here, once you get to the last question, it's going to look for the next questions and answers if you get the last question right. This if statement makes it so you go to the completedQuiz function once they get the last quesiton right.

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

//The displayGameOverMessage is the function given if the player doesn't complete the quiz and goes to 0 or below for their time. We take away all the answer choice buttons, and then show the initials placeholder and submit button that we've been hiding since the beginning. User is given their score and when they enter their initials and click submit, the initials and score are saved in the local storage that we will call upon in the second index.html page and script2.js to show the user their previous score. The message that has been hidden also shows once you click submit.

  function displayGameOverMessage() {

    //We'll give the player a game over screen and take away all the answer choices. Will add a box for them to put their initials to save their high score.

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


  //The completeQuiz is the function given if the player goes through every question and doesn't hit timeLeft = 0;. We take away all the answer choice buttons, and then show the initials placeholder and submit button that we've been hiding since the beginning. User is given their score and when they enter their initials and click submit, the initials and score are saved in the local storage that we will call upon in the second index.html page and script2.js to show the user their previous score. The message that has been hidden also shows once you click submit.

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
