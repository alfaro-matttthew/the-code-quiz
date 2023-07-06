function homeActive() {
    document.getElementById("homeScreen").style.display = "flex";

    document.getElementById("rulesScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("recordScreen").style.display = "none";    
    document.getElementById("scoreScreen").style.display = "none";
}

function rulesActive() {
    document.getElementById("rulesScreen").style.display = "flex";

    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("recordScreen").style.display = "none";
    document.getElementById("scoreScreen").style.display = "none";
}

function gameActive() {
    document.getElementById("gameScreen").style.display = "flex";

    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("rulesScreen").style.display = "none";
    document.getElementById("recordScreen").style.display = "none";
    document.getElementById("scoreScreen").style.display = "none";
}

function recordActive() {
    document.getElementById("recordScreen").style.display = "flex";

    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("rulesScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("scoreScreen").style.display = "none";
}

function scoreActive() {
    document.getElementById("scoreScreen").style.display = "flex";

    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("rulesScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("recordScreen").style.display = "none";
}

document.getElementById("startTest").addEventListener('click', gameActive)