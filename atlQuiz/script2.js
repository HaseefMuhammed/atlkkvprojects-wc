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
        question: "Which programming language is commonly used for artificial intelligence?",
        options: ["COBOL", "Ruby", "Python", "Java"],
        answer: "Python"
    },
    {
        question: "Which device is primarily used to connect a computer to a network?",
        options: ["Monitor", "Router", "Printer", "Keyboard"],
        answer: "Router"
    },
    {
        question: "What does the term 'cloud computing' refer to?",
        options: ["Using physical servers for computing", "Delivering computing services over the Internet", "Storing data on local drives", "Running applications offline"],
        answer: "Delivering computing services over the Internet"
    },
    {
      question: "Which of the following is a type of malware?",
      options: ["Antivirus", "Firewall", "Trojan Horse", "Router"],
      answer: "Trojan Horse"
  },
  {
    question: "Which technology is used in Bluetooth?",
    options: ["Radio waves", "Infrared waves", "Fiber optics", "Satellite signals"],
    answer: "Radio waves"
  },
  {
  question: "Which of the following is a database management system?",
  options: ["Apache", "MySQL", "HTML", "CSS"],
  answer: "MySQL"
  },
  {
  question: "What is the term for unsolicited emails sent in bulk?",
  options: ["Junk Mail", "Spam", "Phishing", "Worm"],
  answer: "Spam"
  },
  {
  question: "Which of the following is a type of cyberattack?",
  options: ["Phishing", "LCrowdsourcing", "Data mining", "Booting"],
  answer: "Phishing"
  },
  {
    question: "What is the function of an IP address?",
    options: ["To encrypt data", "To identify devices on a network", "To speed up the Internet connection", "To store website data"],
    answer: "To identify devices on a network"
    },
    {
      question: "Which of the following is a markup language?",
      options: ["PHP", "HTML", "C++", "Python"],
      answer: "HTML"
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