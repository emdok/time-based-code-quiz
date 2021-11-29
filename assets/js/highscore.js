var highScoresOlEl = document.getElementById('high-scores');

function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    values.forEach(function (el) {
        var li = document.createElement("li");
        li.textContent = el.name.concat(" ", el.score);
        highScoresOlEl.appendChild(li);
    });
};

allStorage();

document.getElementById("clear-scores").addEventListener("click", function() {
    localStorage.clear();
    var ol = document.querySelector("ol");
    ol.innerHTML = "";
})
