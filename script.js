const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: 0
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: 0
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
        correctAnswer: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        correctAnswer: 2
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
        correctAnswer: 1
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: 2
    }
];

let userName = "";

function startQuiz() {
    userName = document.getElementById('user-name').value;
    const quizTitle = document.getElementById('quiz-title');
    
    if (userName) {
        quizTitle.textContent = `${userName}, let's start the quiz!`;
        document.getElementById('home-page').classList.add('d-none');
        document.getElementById('quiz-page').classList.remove('d-none');
        generateQuiz();
    } else {
        alert("Please enter your name to start the quiz.");
    }
}

function generateQuiz() {
    const quizContainer = document.getElementById("quiz-form");
    quizContainer.innerHTML = "";

    questions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("mb-3");

        const questionTitle = document.createElement("h5");
        questionTitle.textContent = `${index + 1}. ${question.question}`;
        questionElement.appendChild(questionTitle);

        question.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement("div");

            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = `question${index}`;
            optionInput.value = optionIndex;
            optionElement.appendChild(optionInput);

            const optionLabel = document.createElement("label");
            optionLabel.textContent = option;
            optionElement.appendChild(optionLabel);

            questionElement.appendChild(optionElement);
        });

        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.correctAnswer) {
            score++;
        }
    });

    document.getElementById("quiz-page").classList.add("d-none");
    document.getElementById("result-page").classList.remove("d-none");
    displayResult(score);
}

function displayResult(score) {
    const resultContainer = document.getElementById("result");
    const resultTitle = document.getElementById("result-title");

    resultTitle.textContent = `${userName}, you scored ${score} out of ${questions.length}`;
    
    let comment;
    if (score === questions.length) {
        comment = "Excellent job!";
    } else if (score >= questions.length / 2) {
        comment = "Good effort!";
    } else {
        comment = "Keep trying!";
    }
    
    resultContainer.textContent = comment;
}

function restartQuiz() {
    document.getElementById("result-page").classList.add("d-none");
    document.getElementById("home-page").classList.remove("d-none");
    document.getElementById("user-name").value = "";
}
