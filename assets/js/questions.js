

var qOne = {
    question: "What is the incorrect way to declare a variable in JavaScript?",
    options: ["var myVar;",  "variable myVar;", "let myVar;", "const myVar;"],
    answer: "variable myVar;"
}

var qTwo = {
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()",  "pop()", "shift()", "unshift()"],
    answer: "push()"
}

var qThree = {
    question: "How do you access the length of a string in JavaScript?",
    options: ["stringLength()",  "len()", "lengthOf()", "length()"],
    answer: "length()"
}

var qFour = {
    question: "What does the === operator in JavaScript do?",
    options: ["Compares two values for equality, allowing type coercion",  "Compares two values for equality, without type coercion", "Assigns a value to a variable", "Checks if two values are not equal"],
    answer: "Compares two values for equality, without type coercion"
}

var qFive = {
    question: "Which is not one of the 8 datatypes in Javascript?",
    options: ["boolean",  "array", "string", "number"],
    answer: "array"
}

var questionList = [qOne, qTwo, qThree, qFour, qFive];

// function questionSwitch() {
//     document.getElementById("questionBox").textContent = qOne.question;
//     document.getElementById("optAType").textContent = qOne.options[0];
//     document.getElementById("optBType").textContent = qOne.options[1];
//     document.getElementById("optCType").textContent = qOne.options[2];
//     document.getElementById("optDType").textContent = qOne.options[3];
// }


