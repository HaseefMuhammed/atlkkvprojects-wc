var key = prompt("Enter your key:", "").trim();  // Trim any extra spaces

if (key === null) {
  // If the user presses the Cancel button, the key will be null
  location.reload();  // Reload the page immediately
} else if (key === "") {
  // If the user presses OK without entering anything
  alert("No key entered. Reloading the page.");
  location.reload();  // Reload the page
} else if (key === "adminatl") {
  console.log("Correct key");
} else {
  alert("Incorrect key");  // Alert the user if the key is incorrect
  location.reload();  // Reload the page after the alert is acknowledged
}




document.getElementById('start-button').addEventListener('click', startQuiz);
document.getElementById('reveal-score').addEventListener('click', revealScore);
// document.getElementById('play-again-button').addEventListener('click', playAgain);

const questions = [
    {
        question: "What is the function of an ESP8266?",
        options: ["Act as a portable battery", "Connect devices to the internet", "Make robots walk", "Store music files"],
        answer: "Connect devices to the internet"
    },
    {
        question: "What does a smart irrigation system do?",
        options: ["Waters plants automatically based on soil moisture", "Monitors weather patterns", "Measures plant growth", "Creates fertilizers"],
        answer: "Waters plants automatically based on soil moisture"
    },
    {
        question: "What is the purpose of RFID chips?",
        options: ["To clean surfaces", "To store music", "To power electric cars", "To track and identify objects or people"],
        answer: "To track and identify objects or people"
    },
    {
        question: "What does a chatbot do?",
        options: ["Cooks food for people", "Answers questions and chats with users", "Repairs mobile phones", "Creates documents"],
        answer: "Answers questions and chats with users"
    },
    {
        question: "Which sensor is used in a rainwater alert system?",
        options: ["Rain sensor", "Light sensor", "Sound sensor", "Motion sensor"],
        answer: "Rain sensor"
    },
    {
        question: "What is an autonomous drone capable of?",
        options: ["Cleaning oceans", "Building houses", "Running on the road", "Flying and completing tasks without human control"],
        answer: "Flying and completing tasks without human control"
    },
    {
        question: "What is the role of artificial intelligence in healthcare?",
        options: ["Cleaning hospital floors", "Diagnosing diseases faster", "Writing medical books", "Making medicines manually"],
        answer: "Diagnosing diseases faster"
    },
    {
        question: "What does a smart traffic management system do?",
        options: ["Controls traffic lights based on real-time traffic conditions", "Parks cars for drivers", "Stops pedestrians from crossing", "Repairs damaged roads"],
        answer: "Controls traffic lights based on real-time traffic conditions"
    },
    {
        question: "What is an example of a smart wearable device?",
        options: ["A paper bracelet", "A wristband without sensors", "A smartwatch", "A leather wallet"],
        answer: "A smartwatch"
    },
    {
        question: "What is the function of a thermal camera?",
        options: ["Detect heat and display temperature differences", "Take high-resolution selfies", "Record videos in slow motion", "Take low-resolution selfies"],
        answer: "Detect heat and display temperature differences"
    }
];


let shuffledQuestions, currentQuestionIndex, score, timerInterval, timeLeft;

function startQuiz() {
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        alert('Please enter your name');
        return;
    }

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    resetQuiz();
    showQuestion();
}

function resetQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 120;
    document.getElementById('time').textContent = timeLeft;
    timerInterval = setInterval(updateTimer, 1000);
}

function showQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(option) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function updateTimer() {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
}

function revealScore() {
    const name = document.getElementById('name').value;
    document.getElementById('score').textContent = `${name} got ${score} out of ${questions.length}`;
}

// function playAgain() {
//     document.getElementById('result-screen').classList.add('hidden');
//     document.getElementById('quiz-screen').classList.remove('hidden');
//     resetQuiz();
//     showQuestion();
// }

console.log(`Script loaded`)
console.log("Q3")