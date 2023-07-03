var score = 0;

var currentQuestion = 0;

var radioInputs = document.querySelectorAll("radio-option");
console.log(radioInputs);

function questionSwitch() {

    var questionContainer = document.getElementById("questionBox");


/* This is where I connected each <p> to the respective var
    // var optionA = document.getElementById("optA");
    // var optionB = document.getElementById("optB");
    // var optionC = document.getElementById("optC");
    // var optionD = document.getElementById("optD");
*/

    questionContainer.textContent = questionList[currentQuestion].question;

    questionContainer.innerHTML = "",
    questionList[currentQuestion].options.forEach(option => {
        // choice
    })





    question.textContent = questionList[0].question;
    optionA.textContent = questionList[0].options[0];
    optionB.textContent = questionList[0].options[1];
    optionC.textContent = questionList[0].options[2];
    optionD.textContent = qquestionList[0].options[3];
}

// function checkAnswer() {
//         var questionForm = document.querySelector("input[name=option]:checked")
//         console.log(questionForm);
//         console.dir(questionForm);
//         answer = qOne.answer;
//         console.log(answer);
//     if (questionForm === answer) {
//         alert("This is working");
//         console.log(score);
//     }
//     else if (questionForm != answer) {
//         alert("This is NOT working");
//         console.log(score);
//     }
// }



document.getElementById("startTest").addEventListener('click', questionSwitch)

document.getElementById("submitBtn").addEventListener("click", checkAnswer);