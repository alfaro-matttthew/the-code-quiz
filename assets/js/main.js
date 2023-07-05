var score = 0;

var currentQuestion = 0;

var radioA = document.getElementById("optA");
var radioB = document.getElementById("optB");
var radioC = document.getElementById("optC");
var radioD = document.getElementById("optD");

let radioOptions = [radioA, radioB, radioC, radioD]

function questionSwitch() {

    // Variables and Arrays compiling data for the Functions
    var questionContainer = document.getElementById("questionItem");

    questionContainer.textContent = questionList[0].question;

    for (var i = 0; i < radioOptions.length; i++) {
        radioOptions[i].textContent = questionList[0].options[i];
        console.log(radioOptions[i].textContent);
    }
    
    
}

document.getElementById("startTest").addEventListener("click", questionSwitch);

function init() {
    clear
    document.getElementById("questionItem").textContent = "";
    
    for (var i = 0; i < radioOptions.length; i++) {
        radioOptions[i].textContent = "";
    }

}