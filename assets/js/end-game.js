var scoreStats = {
    initial: "",
    score: score,
    time: timeLeft
}

function endGame() {

    recordActive();

    clearInterval(intervalTimer);

    var playerStats = JSON.parse(localStorage.getItem("player")) || [];

    scoreStats = {
        initial: "",
        score: score,
        time: timeLeft
    }

    localStorage.setItem("player", JSON.stringify(playerStats));

}