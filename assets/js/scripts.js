/*
WHEN the game is over
THEN I can save my initials and score */


var questions = [
    {
        num: 1,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Clean Style Sheet",
            "Cascading Style Sheet",
            "Correct Style Sheet",
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
var introEl = document.getElementById('intro');
var timerEl = document.getElementById('countdown');
var startBtnEl = document.getElementById('start-btn');
var quizQuestionsEl = document.getElementById('quiz-questions');
var solutionEl = document.getElementById('solution');
var questionCount = 0;
var timeLeft = 60;
var userScore = 0;
var userInfo = {
    name: "",
    score: 0
};
var storageCounter = 0;

// Timer countdown
function countDown() {

    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timeInterval);
            endGame();
        }

    }, 1000);
}

//start quiz
startBtnEl.addEventListener('click', function () {
    introEl.style.display = "none";
    countDown();
    quizQuestions();
});

//Quiz Question Display Function
function quizQuestions() {
    if (questionCount > 4) {
        endGame();
    };

    var quizQuestionsH2El = document.createElement("h2");
    quizQuestionsEl.append(quizQuestionsH2El);
    quizQuestionsH2El.textContent = questions[questionCount].question;
    var ol = document.createElement("ol");
    quizQuestionsEl.append(ol);

    //create list elements for quiz options
    questions[questionCount].options.forEach(function (el) {
        var li = document.createElement("li");
        li.innerHTML = '<button class="btn option-btn" id="options">' + el + '</button>';
        document.querySelector('ol').appendChild(li);
    });


    solution();
};

// function to update question after option click
var userAnswer = "";
function solution() {
    var ol = document.querySelector("ol")
    ol.addEventListener("click", function (evt) {
        quizQuestionsEl.innerHTML = "";
        userAnswer = evt.target.textContent;
        answerCheck(userAnswer);
    });
};

function answerCheck(choice) {

    if (choice === questions[questionCount].answer) {
        var rightAnswerEl = document.createElement("h2");
        rightAnswerEl.id = "user-answer";
        solutionEl.append(rightAnswerEl);
        rightAnswerEl.textContent = "Correct!";
        userScore += 20;
        setTimeout(function () {
            solutionEl.innerHTML = ""
        }, 1000)

    }
    else {
        var wrongAnswerEl = document.createElement("h2");
        wrongAnswerEl.id = "user-answer";
        solutionEl.append(wrongAnswerEl);
        wrongAnswerEl.textContent = "Wrong!";
        timeLeft -= 10;
        setTimeout(function () {
            solutionEl.innerHTML = ""
        }, 1000)

    }

    questionCount++;
    quizQuestions();
};

function endGame() {
    // clear quiz questions
    var solutionEl = document.getElementById("quiz-questions");
    solutionEl.innerHTML = "";

    // create high score form
    var scoreEl = document.createElement("h2");
    scoreEl.id = "user-score";
    scoreEl.textContent = userScore;
    var formEl = document.createElement("form");
    formEl.id = "score-form";
    var textInputEl = document.createElement("input")
    textInputEl.setAttribute("type", "text");
    textInputEl.id = "user-name";
    textInputEl.setAttribute("placeholder", "Initials");
    var submitButtonEl = document.createElement("input");
    submitButtonEl.setAttribute("type", "submit");
    submitButtonEl.setAttribute("value", "Submit");
    formEl.appendChild(textInputEl);
    formEl.appendChild(submitButtonEl);
    quizQuestionsEl.append(scoreEl, formEl);
};

document.addEventListener("submit", function (event) {
    event.preventDefault();

    storageCounter++;
    var userName = document.querySelector("#user-name").value;
    userInfo.name = userName;
    userInfo.score = userScore;
    localStorage.setItem('userInfo' + storageCounter, JSON.stringify(userInfo));

    console.log(userInfo);
});

// function pushToHighScorePage() {
//     JSON.parse(localStorage.getItem())
// }

// function to display right or wrong and store points

// end game function, game ends when time hits 0 or player reaches end of questions, displays High Scores


