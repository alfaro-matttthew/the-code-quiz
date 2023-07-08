
var form = document.getElementById("initialForm");

var playerStats = JSON.parse(localStorage.getItem("highscores")) || []; 

function getHighscores() {
// Empty out the old datata
document.querySelector(".score-board").textContent = "";

playerStats.forEach(element => {
    var newHighScore = document.createElement("p");

    var spacer = document.createElement("br");

    newHighScore.textContent = `${element.initial} ${element.score}`

    newHighScore.appendChild(spacer);

    document.querySelector(".score-board").appendChild(newHighScore);
});

}

form.addEventListener("submit", function(event) {
event.preventDefault();

playerInitials = document.getElementById("initial").value;

var scoreStats = {
    initial: "",
    score: score,
    time: timeLeft
};

scoreStats.initial = playerInitials;

playerStats.push(scoreStats);

localStorage.setItem("highscores", JSON.stringify(playerStats));
getHighscores();
homeActive();

});

getHighscores();

































// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     var scoreStats = {
//         initial: "",
//         score: score,
//         time: timeLeft
//     }

//     var initialInput = document.getElementById("initial");
//     var initial = initialInput.value;

//     var playerStats = JSON.parse(localStorage.getItem("player")) || [];

//     /**/ var /**/ scoreStats = {
//         initial: "",
//         score: score,
//         time: timeLeft
//     }

//     scoreStats.initial = initial;
//     console.log(scoreStats.initial);
//     console.log(scoreStats);

//     localStorage.setItem("highscores", JSON.stringify(playerStats));

//     homeActive();
    
// })