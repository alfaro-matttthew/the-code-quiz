var timerEl = document.getElementById("timeVal");

var timeLeft = 60;

var intervalTimer

function startTimer() {

    intervalTimer = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "00:" + timeLeft;

        if (timeLeft === 0 ) {
            clearInterval(intervalTimer);
            endGame();
        }
    }, 1000)

}

// function endGame() {
//     alert("You Lose");
// }