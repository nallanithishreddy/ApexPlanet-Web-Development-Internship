const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Markup Language",
            "Hyper Transfer Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used for styling webpages?",
        options: [
            "Java",
            "Python",
            "CSS",
            "C"
        ],
        answer: "CSS"
    },

    {
        question: "Which language is used for webpage interactivity?",
        options: [
            "JavaScript",
            "SQL",
            "C++",
            "Python"
        ],
        answer: "JavaScript"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

function loadQuestion() {

    const current = quizData[currentQuestion];

    questionEl.textContent = current.question;

    optionsEl.innerHTML = "";

    current.options.forEach(option => {

        const btn = document.createElement("button");

        btn.classList.add("option");

        btn.textContent = option;

        btn.onclick = () => {

            if (option === current.answer) {
                score++;
            }

            document.querySelectorAll(".option").forEach(button => {
                button.disabled = true;
            });

        };

        optionsEl.appendChild(btn);

    });

}

document.getElementById("nextBtn").addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < quizData.length) {

        loadQuestion();

    } else {

        document.getElementById("quiz-box").style.display = "none";

        resultEl.textContent =
            `Your Score: ${score}/${quizData.length}`;

    }

});

loadQuestion();

fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {

        document.getElementById("quote").textContent =
            data.slip.advice;

    })
    .catch(() => {

        document.getElementById("quote").textContent =
            "Stay focused and keep learning.";

    });