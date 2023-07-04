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
        question: "This is the first question. How many Pokemon are there in the First Generation",
        answers: [
            { text: "151", correct: true},
            { text: "Answer Choice 2", correct: false},
            { text: "Answer Choice 3", correct: false},
            { text: "Answer Choice 4", correct: false},
        ]
    },

    {
        question: "Question 2. This is the second question",
        answers: [
            { text: "Answer Choice 1", correct: false},
            { text: "Answer Choice 2", correct: true},
            { text: "Answer Choice 3", correct: false},
            { text: "Answer Choice 4", correct: false},
        ]
    }
];

//console.log(questionBank[0]); //Checking to see if my question bank is working

var question = document.getElementById("question");
var answerButton = document.getElementById("answer-button");
var nextButton = document.getElementById("next-button");
var selectedAnswer1 = document.getElementById("first-choice");
var selectedAnswer2 = document.getElementById("second-choice");
var selectedAnswer3 = document.getElementById("third-choice");
var selectedAnswer4 = document.getElementById("fourth-choice");

var currentQuestionNumber = 0;
let score = 0;

function displayQuestion(){

    question.textContent = questionBank[currentQuestionNumber].question;
    selectedAnswer1.textContent = questionBank[currentQuestionNumber].answers[0].text;
    selectedAnswer2.textContent = questionBank[currentQuestionNumber].answers[1].text;
    selectedAnswer3.textContent = questionBank[currentQuestionNumber].answers[2].text;
    selectedAnswer4.textContent = questionBank[currentQuestionNumber].answers[3].text;

}



displayQuestion();
















//OLD CODE BELOW


//console.log("Var question is: " + question); //H2 

// function startQuiz(){
//     currentQuestionNumber = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion(){
//     resetButtons(); //Resets the current state and gets rid of all buttons that are existing
//     var currentQuestion = questionBank[currentQuestionNumber];
//     //console.log("Current question is: " + currentQuestion.question);

//     var questionNumber = currentQuestionNumber + 1;
//     question.innerHTML = questionNumber + "." + currentQuestion.question;


   

//     currentQuestion.answers.forEach(answer => {
//         //console.log(answer);
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);
//     })
//     };

 
// //Will reset the button state every time we go to the next question.
// function resetButtons(){
//     nextButton.style.display = "none";
//     while(answerButton.firstChild){
//         answerButton.removeChild(answerButton.firstChild);
//     }
// }



// startQuiz();





