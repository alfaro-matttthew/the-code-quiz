// var scoreStats = {
//     initial: "",
//     score: score,
//     time: timeLeft
// }



// function endGame() {  

//     clearInterval(intervalTimer);

//     var playerStats = JSON.parse(localStorage.getItem("player")) || [];

//     // /**/ var /**/ scoreStats = {
//     //     initial: "",
//     //     score: score,
//     //     time: timeLeft
//     // }

//     localStorage.setItem("player", JSON.stringify(playerStats));

//     // recordActive();

// }



var playerStats = [];

var form = document.getElementById("initialForm");

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
homeActive();

});

































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