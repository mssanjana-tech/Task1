const questions = [
    {
        question: "What is HTML?",
        answers: ["Programming Language", "Markup Language", "Database"],
        correct: 1
    },
    {
        question: "What is CSS used for?",
        answers: ["Styling", "Logic", "Database"],
        correct: 0
    },
    {
        question: "What is JavaScript?",
        answers: ["Styling", "Programming Language", "Structure"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    let q = questions[currentQuestion];
    questionEl.innerText =
`Question ${currentQuestion + 1}: ${q.question}`;
    answersEl.innerHTML = "";

    q.answers.forEach((ans, index) => {
        let btn = document.createElement("button");
        btn.innerText = ans;
        const labels = ["A", "B", "C", "D"];
        btn.innerText = `${labels[index]}. ${ans}`;
        btn.onclick = () => checkAnswer(index);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    let correct = questions[currentQuestion].correct;

    if (selected === correct) {
        alert("Correct! 🎉");
        score++;
    } else {
        alert("Wrong ❌");
    }
}

nextBtn.onclick = () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Finished!";
        answersEl.innerHTML = "";
        scoreEl.innerText = "Your Score: " + score;
        nextBtn.style.display = "none";
    }
};

loadQuestion();
