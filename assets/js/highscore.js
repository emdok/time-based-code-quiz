var highScoresEl = document.getElementById("high-scores");
var userScores = JSON.parse(localStorage.getItem("userInfo"));

sortScores();

function sortScores() {

    userScores.sort(function (a, b) {
        return b.score - a.score;
    });
    console.log(userScores);

displayScores();
};

function displayScores() {
    for (var i = 0; i < userScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = userScores[i].name.concat(" ", userScores[i].score);
        highScoresEl.appendChild(li);
    }
};


function clearScores() {
    localStorage.clear();
};

