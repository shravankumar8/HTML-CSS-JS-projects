const questions = [
  {
    question: "Which is the largest animal?",
    answers: [
      { text: "cat", isCorrect: false },
      { text: "dog", isCorrect: false },
      { text: "fish", isCorrect: false },
      { text: "bird", isCorrect: true },
    ],
  },
  {
    question: "Which is the largest bird?",
    answers: [
      { text: "cat", isCorrect: false },
      { text: "pig", isCorrect: false },
      { text: "dog", isCorrect: true },
      { text: "fish", isCorrect: false },
    ],
  },
  {
    question: "Which is the largest fish?",
    answers: [
      { text: "cat", isCorrect: false },
      { text: "pig", isCorrect: false },
      { text: "donkey", isCorrect: false },
      { text: "dog", isCorrect: true },
    ],
  },
  {
    question: "Which is the largest dog?",
    answers: [
      { text: "cat", isCorrect: false },
      { text: "pig", isCorrect: false },
      { text: "dog", isCorrect: true },
      { text: "fish", isCorrect: false },
    ],
  },
];

const questionElement = document.querySelector("#question");
const answerButton = document.querySelector("#buttons");
const NextButton = document.querySelector(".next");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  NextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  answerButton.innerHTML = ""; // Clear previous answer buttons

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}

startQuiz();
