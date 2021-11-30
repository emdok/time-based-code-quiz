// High Scores Functionality

function highScores() {

    document.getElementById("clear-scores").addEventListener("click", function () {
        localStorage.clear();
        var ol = document.querySelector("ol");
        ol.innerHTML = "";
    })

    allStorage();
};

function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    values.forEach(function (el) {
        var li = document.createElement("li");
        li.textContent = el.name + el.score;
        var ol = document.querySelector("ol");
        ol.appendChild(li);
    });
};

function clearScores() {
    localStorage.clear();
};