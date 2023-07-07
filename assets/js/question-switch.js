var score = 0;

var currentQuestion = 0;

var radioA = document.getElementById("optA");
var radioB = document.getElementById("optB");
var radioC = document.getElementById("optC");
var radioD = document.getElementById("optD");

let radioOptions = [radioA, radioB, radioC, radioD]

var i;

function questionSwitch() {

    if (currentQuestion < 5) {

        document.getElementById("questionItem").textContent = "";
        
        for (i = 0; i < radioOptions.length; i++) {
            radioOptions[i].textContent = "";
            console.log(i);
        }

        // Variables and Arrays compiling data for the Functions
        var questionContainer = document.getElementById("questionItem");

        questionContainer.textContent = questionList[currentQuestion].question;

        for (var i = 0; i < radioOptions.length; i++) {
            radioOptions[i].textContent = questionList[currentQuestion].options[i];
            // console.log(radioOptions[i].textContent);
        }
    }
    else {
        // endGame();
        currentQuestion = 0;
        recordActive();
    }
    
}


