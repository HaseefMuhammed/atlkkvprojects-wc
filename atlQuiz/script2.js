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
        question: "Which of these is used in virtual reality (VR) devices?",
        options: ["Headsets with 3D visuals", "Paper glasses", "Plastic goggles", "A regular mirror"],
        answer: "Headsets with 3D visuals"
    },
    {
        question: "What is the primary purpose of cloud storage?",
        options: ["To back up files to USB drives", "To collect rainwater", "To store files on paper", "To save files online and access them from anywhere"],
        answer: "To save files online and access them from anywhere"
    },
    {
        question: "What is the main function of a GPS?",
        options: ["To check the internet speed", "To measure the weather", "To provide location and navigation", "To store phone numbers"],
        answer: "To provide location and navigation"
    },
    {
        question: "What is the purpose of an AI-powered recommendation system?",
        options: ["To suggest movies, songs, or products based on user preferences", "To clean computer screens", "To fix broken gadgets", "To predict the weather"],
        answer: "To suggest movies, songs, or products based on user preferences"
    },
    {
        question: "Which of these is used for detecting short circuits?",
        options: ["Relay modules and Arduino", "A regular wire cutter", "A plastic ruler", "A solar panel"],
        answer: "Relay modules and Arduino"
    },
    {
        question: "What is a smart grid used for?",
        options: ["Building roads", "Managing and distributing electricity efficiently", "Connecting water pipelines", "Growing plants faster"],
        answer: "Managing and distributing electricity efficiently"
    },
    {
        question: "What does a LiDAR sensor do?",
        options: ["Cooks food faster", "Creates a 3D print", "Detects sounds in a room", "Measures distances using lasers"],
        answer: "Measures distances using lasers"
    },
    {
        question: "Which of these is a renewable energy source?",
        options: ["Solar energy", "Gasoline", "Coal", "Nuclear fuel"],
        answer: "Solar energy"
    },
    {
        question: "What is the purpose of a smart SOS system?",
        options: ["To track food orders", "To provide quick help during emergencies", "To connect to Bluetooth speakers", "To guide tourists"],
        answer: "To provide quick help during emergencies"
    },
    {
        question: "What is the main use of a robotic arm in factories?",
        options: ["To give employees breaks", "To print bills", "To clean the floors", "To assemble parts and carry heavy objects"],
        answer: "To assemble parts and carry heavy objects"
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
console.log("Q2")