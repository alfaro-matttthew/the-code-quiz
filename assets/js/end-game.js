

function endGame() {

    clearInterval(intervalTimer);

    var playerStats = JSON.parse(localStorage.getItem("player")) || [];

    var scoreStats = {
        initial: "name",
        score: score,
        time: timeLeft
    }
    console.log(scoreStats);

    playerStats.push(scoreStats);
    console.log(playerStats);


    localStorage.setItem("player", JSON.stringify(playerStats));

}