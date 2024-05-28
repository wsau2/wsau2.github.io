const beginButton = document.getElementById("beginButton");
const beginContent = document.getElementById("begin-content");
const quizContent = document.getElementById("quiz-content");


function beginQuiz() {
    console.log("click")
    beginContent.style.display = "none";
    quizContent.style.display = "block";
}   

beginButton.addEventListener('click', beginQuiz);
