const form = document.getElementById("initialForm");

// var scoreStats = {
//     initial: "",
//     score: score,
//     time: timeLeft
// }

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var initialInput = document.getElementById("initial");
    var initial = initialInput.value;

    scoreStats.initial = initial;
    console.log(scoreStats.initial);
    console.log(scoreStats);

    homeActive();
    
})