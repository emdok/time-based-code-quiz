var highScoresEl = document.getElementById("high-scores");

getScores();

function getScores() {
    var userScores = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userScores);

    userScores.sort(function (a, b) {
        return a.score - b.score;
    })
    console.log(userScores);


    // for (var i = 0; i < userScores.length; i++) {
    //     var li = document.createElement("li");
    //     li.textContent = userScores[i].name.concat(" ", userScores[i].score);
    //     highScoresEl.appendChild(li);
    // }

};

function clearScores() {
    localStorage.clear();
};

