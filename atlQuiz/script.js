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
        question: "Which programming language is used to create web pages?",
        options: ["HTML", "Python", "Java", "C++"],
        answer: "HTML"
    },
    {
        question: "What is the purpose of a smart thermostat?",
        options: ["To store energy for future use", "To wash clothes faster", "To play music in the room", "To control the temperature of a house automatically"],
        answer: "To control the temperature of a house automatically"
    },
    {
        question: "Which device uses IoT to monitor health?",
        options: ["A fitness tracker", "A regular wall clock", "A microwave oven", "A textbook"],
        answer: "A fitness tracker"
    },
    {
        question: "What is the use of a Raspberry Pi?",
        options: ["To store large amounts of data", "To play video games only", "To learn coding and build small electronics projects", "To bake pies"],
        answer: "To learn coding and build small electronics projects"
    },
    {
        question: "What is a drone used for?",
        options: ["Growing crops in fields", "Flying as a passenger vehicle", "Capturing aerial photos and videos", "Writing software programs"],
        answer: "Capturing aerial photos and videos"
    },
    // {
    //     question: "Which technology helps cars drive by themselves?",
    //     options: ["Manual gears", "Autonomous driving systems", "Analog clocks", "Paper maps"],
    //     answer: "Autonomous driving systems"
    // },
    // {
    //     question: "What is the main use of blockchain technology?",
    //     options: ["To charge mobile phones", "To print documents", "To securely store and transfer data", "To create music"],
    //     answer: "To securely store and transfer data"
    // },
    // {
    //     question: "What is a 3D printer used for?",
    //     options: ["Recording videos", "Printing text on paper", "Printing three-dimensional objects", "Designing posters"],
    //     answer: "Printing three-dimensional objects"
    // },
    // {
    //     question: "Which of these is an example of machine learning?",
    //     options: ["A chatbot learning to respond better over time", "A calculator solving math equations", "A clock showing the current time", "A fan rotating at the same speed"],
    //     answer: "A chatbot learning to respond better over time"
    // },
    {
        question: "What does a microcontroller like Arduino do?",
        options: ["Acts as a TV remote", "Controls electronic devices based on programming", "Stores books and movies", "Cleans a room automatically"],
        answer: "Controls electronic devices based on programming"
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
    timeLeft = 60;
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
console.log("Q1")