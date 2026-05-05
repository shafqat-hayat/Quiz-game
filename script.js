const questions = [
    {
        q: "Which programming language is known as the 'backbone' of the web?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: 2
    },
    {
        q: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink Text Management Lib", "Home Tool Markup Language"],
        answer: 0
    },
    {
        q: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: 2
    },
    {
        q: "Inside which HTML element do we put the JavaScript code?",
        options: ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: 2
    },
    {
        q: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "create myFunction()"],
        answer: 0
    },
    {
        q: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/*", "<!--", "##"],
        answer: 0
    },
    {
        q: "How do you select an element with id 'demo' in CSS?",
        options: [".demo", "#demo", "demo", "*demo"],
        answer: 1
    },
    {
        q: "Which operator is used to assign a value to a variable?",
        options: ["*", "-", "=", "x"],
        answer: 2
    },
    {
        q: "What is the correct way to write a JavaScript array?",
        options: ["var colors = 1 = ('red'), 2 = ('green')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green')"],
        answer: 1
    },
    {
        q: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseclick", "onchange", "onclick", "onmouseover"],
        answer: 2
    }
];

let currentIdx = 0;
let score = 0;

// UI Elements
const homeBox = document.getElementById('home-box');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const startBtn = document.getElementById('start-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const progressEl = document.getElementById('progress');
const finalScoreEl = document.getElementById('final-score');

// Handle Starting the Quiz
startBtn.addEventListener('click', () => {
    homeBox.classList.add('hidden');
    quizBox.classList.remove('hidden');
    loadQuestion();
});

function loadQuestion() {
    const currentQuestion = questions[currentIdx];
    questionEl.innerText = currentQuestion.q;
    optionsEl.innerHTML = '';
    
    // Update Progress Bar (Increments of 10%)
    const progressPercent = (currentIdx / questions.length) * 100;
    progressEl.style.width = `${progressPercent}%`;

    currentQuestion.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = "w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-500/20 hover:border-orange-500/50 transition-all";
        btn.onclick = () => handleAnswer(i);
        optionsEl.appendChild(btn);
    });
}

function handleAnswer(selected) {
    if (selected === questions[currentIdx].answer) {
        score++;
    }

    currentIdx++;

    if (currentIdx < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizBox.classList.add('hidden');
    resultBox.classList.remove('hidden');
    progressEl.style.width = '100%';
    const percentage = Math.round((score / questions.length) * 100);
    finalScoreEl.innerText = percentage;
}