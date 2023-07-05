function init() {
    // clear the question and option boxes as well as the timer
    document.getElementById("questionItem").textContent = "";
    
    for (var i = 0; i < radioOptions.length; i++) {
        radioOptions[i].textContent = "";
    }

    timerEl.textContent - "";

    questionSwitch();
    startTimer();
}

document.getElementById("startTest").addEventListener("click", init);