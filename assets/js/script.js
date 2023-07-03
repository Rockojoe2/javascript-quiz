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

var questionBank = [
    {
        question: "This is the first question",
        answers: [
            { text: "Answer Choice 1", correct: true},
            { text: "Answer Choice 2", correct: false},
            { text: "Answer Choice 3", correct: false},
            { text: "Answer Choice 4", correct: false},
        ]
    },

    {
        question: "This is the second question",
        answers: [
            { text: "Answer Choice 1", correct: false},
            { text: "Answer Choice 2", correct: true},
            { text: "Answer Choice 3", correct: false},
            { text: "Answer Choice 4", correct: false},
        ]
    }
];

console.log(questionBank[0]); //Checking to see if my question bank is working

var question = document.getElementById("question");
var answerButton = document.getElementById("answer-button");
var answerButton = document.getElementById("next-button");

var currentQuestion = 0;



