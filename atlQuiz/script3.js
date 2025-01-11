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
        question: "Which of the following is not a type of software license?",
        options: ["Freeware", "Openware", "Shareware", "Proprietary"],
        answer: "Openware"
    },
    {
        question: "Which technology is used in contactless payment systems?",
        options: ["NFC", "GPS", "LTE", "DSL"],
        answer: "NFC"
    },
    {
        question: "What is the main purpose of a VPN?",
        options: ["To increase Internet speed", "To secure connections over a public network", "To store large amounts of data", "To monitor network traffic"],
        answer: "To secure connections over a public network"
    },
    {
      question: "Which of the following is a frontend development framework?",
      options: ["Node.js", "Django", "Angular", "Ruby on Rails"],
      answer: "Angular"
  },
  {
    question: "Which company developed the Android operating system?",
    options: ["Apple", "Google", "Microsoft", "IBM"],
    answer: "Google"
  },
  {
  question: "Which of the following is a common protocol for sending email?",
  options: ["HTTP", "FTP", "SMTP", "TCP"],
  answer: "SMTP"
  },
  {
  question: "What does the acronym 'IoT' stand for?",
  options: ["Internet of Technology", "Input/Output Transmission", "Internet of Things", "Internal Operating Time"],
  answer: "Internet of Things"
  },
  {
  question: "Which of the following is an example of an operating system?",
  options: ["Chrome", "Ubuntu", "Java", "SQL"],
  answer: "Ubuntu"
  },
  {
    question: "Which of the following is not an input device?",
    options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
    answer: "Monitor"
    },
    {
      question: "Which technology is used to connect devices wirelessly within a short range?",
      options: ["Wi-Fi", "Ethernet", "Bluetooth", "Fiber optics"],
      answer: "Bluetooth"
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