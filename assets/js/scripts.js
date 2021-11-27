/*
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */

// TO DO: Build Function to Start Game
// TO DO: Build Function to End Game
// TO DO: Build Function to Continue Game
// TO DO: Build function for Timer
// TO DO: Build Function to display qusetions from array
// TO DO: Build Function to capture score
// TO DO: Function to display and store score
// TO DO: 

var questions = [
    {
        num: 1,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Clean Style Sheet",
            "Curious Style Sheet",
            "Cascading Style Sheet",
            "Computed Style Sheet"
        ]
    },
    {
        num: 2,
        question: "When a function belongs to an object, what is that called?",
        answer: "A Method",
        options: [
            "A String",
            "A Method",
            "An Array",
            "An Expression"
        ]
    },
    {
        num: 3,
        question: "What are the two ways to create a function?",
        answer: "Function Declaration & Function Expression",
        options: [
            "Function String & Function Array",
            "Function Object & Function Expression",
            "Function Declaration & Function Array",
            "Function Declaration & Function Expression"
        ]
    },
    {
        num: 4,
        question: "What is Global Scope as it pertains to a variable?",
        answer: "Any variable declared in the document that is not inside of a function",
        options: [
            "Any variable declared in the document that is not inside of a function",
            "Any variable declared in the document that is inside of a function",
            "Any variable declared in the document that is declared in a different js file",
            "Any variable declared in the document that is a number"
        ]
    },
    {
        num: 5,
        question: "Using a period between the object name and property is called what?",
        answer: "Dot Notation",
        options: [
            "Dot Conjunction",
            "Dot Notation",
            "Dot Addition",
            "Dot Companionship"
        ]
    },
];
var timerEl = document.getElementById('countdown');
var startBtnEl = document.getElementById('start-btn');
var quizQuestionsEl = document.getElementById('quiz-questions');
var questionDisplayEl = document.getElementById('question-display');
var answerDisplayEl = document.getElementById('answer-display');

// Timer countdown
function countDown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft --;

        if (timeLeft < 0) {
            clearInterval(timeInterval);
        }

    }, 1000);
}

//Start Button Function
// Starts Timer
// Displays Quiz Questions
startBtnEl.addEventListener('click', function() {
    countDown();
    quizQuestions();
});

//Quiz Question Display Function
function quizQuestions() {
    questionDisplayEl.textContent = questions[0].question;

    questions[0].options.forEach(function(el) {
        var li = document.createElement("li");
        li.className = "options";
        li.textContent = el;
        document.body.appendChild(li);

    });

};


