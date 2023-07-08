var scoreBox = document.getElementById("scoreVal");

var score = 0;

function hangleAnswerSelection(event) {

        const selectedAnswer = event.target.textContent;
        const correctAnswer = questionList[currentQuestion].answer;

        // console.log(selectedAnswer);

        if (selectedAnswer === correctAnswer) {
            score+=10;
            // console.log(score);

            scoreBox.textContent = score;
        }
        else {
            timeLeft-=10;
        }

        currentQuestion++;

        questionSwitch();
    }

document.getElementById("optA").addEventListener("click", hangleAnswerSelection);
document.getElementById("optB").addEventListener("click", hangleAnswerSelection);
document.getElementById("optC").addEventListener("click", hangleAnswerSelection);
document.getElementById("optD").addEventListener("click", hangleAnswerSelection);
