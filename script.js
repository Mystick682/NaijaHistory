const questions = [
  {
    question: "Who is the current President of Nigeria?",
    options: ["Muhammadu Buhari", "Bola Ahmed Tinubu", "Goodluck Jonathan", "Yemi Osinbajo"],
    answer: "Bola Ahmed Tinubu"
  },
  {
    question: "What is the name of Nigeria’s national assembly upper chamber?",
    options: ["House of Reps", "National Council", "Senate", "Federal Court"],
    answer: "Senate"
  },
  {
    question: "What is the currency of Nigeria?",
    options: ["Dollar", "Naira", "Cedi", "Pound"],
    answer: "Naira"
  },
  {
    question: "When was Nigeria declared independent?",
    options: ["October 1, 1960", "May 29, 1999", "January 1, 1963", "October 1, 1957"],
    answer: "October 1, 1960"
  },
  {
    question: "Which Nigerian city is known as the 'Centre of Excellence'?",
    options: ["Lagos", "Abuja", "Kano", "Port Harcourt"],
    answer: "Lagos"
  },
  {
    question: "Who is the current Governor of Lagos State (2025)?",
    options: ["Akinwunmi Ambode", "Babatunde Fashola", "Sanwo-Olu", "Wale Adedayo"],
    answer: "Sanwo-Olu"
  },
  {
    question: "Which is Nigeria’s largest ethnic group?",
    options: ["Hausa", "Igbo", "Yoruba", "Fulani"],
    answer: "Hausa"
  },
  {
    question: "Who is the current Minister of Education in Nigeria (2025)?",
    options: ["Adamu Adamu", "Tahir Mamman", "Nyesom Wike", "Festus Keyamo"],
    answer: "Tahir Mamman"
  },
  {
    question: "Which year was the Nigerian Civil War fought?",
    options: ["1966–1970", "1950–1954", "1980–1985", "1975–1979"],
    answer: "1966–1970"
  },
  {
    question: "What is the capital of Kaduna State?",
    options: ["Zaria", "Kaduna", "Kafanchan", "Jaji"],
    answer: "Kaduna"
  },
  {
    question: "Who is Nigeria's Chief Justice (as of 2025)?",
    options: ["Olukayode Ariwoola", "Ibrahim Tanko", "Walter Onnoghen", "Ibrahim Muhammad"],
    answer: "Olukayode Ariwoola"
  },
  {
    question: "Which political party is currently ruling Nigeria?",
    options: ["APC", "PDP", "LP", "NNPP"],
    answer: "APC"
  },
  {
    question: "Which river is the longest in Nigeria?",
    options: ["River Benue", "River Ogun", "River Kaduna", "River Niger"],
    answer: "River Niger"
  },
  {
    question: "Who was the first female speaker of the Nigerian House of Reps?",
    options: ["Patricia Etteh", "Ngozi Okonjo-Iweala", "Stella Oduah", "Amina Mohammed"],
    answer: "Patricia Etteh"
  },
  {
    question: "Which Nigerian artist won a Grammy in 2021?",
    options: ["Burna Boy", "Davido", "Wizkid", "Tems"],
    answer: "Burna Boy"
  },
  {
    question: "Which is the most populous state in Nigeria?",
    options: ["Kano", "Lagos", "Kaduna", "Rivers"],
    answer: "Lagos"
  },
  {
    question: "Which Nigerian was recently appointed head of WTO?",
    options: ["Amina Mohammed", "Ngozi Okonjo-Iweala", "Chimamanda Adichie", "Zainab Ahmed"],
    answer: "Ngozi Okonjo-Iweala"
  },
  {
    question: "What is Nigeria’s dialing code?",
    options: ["+234", "+233", "+256", "+231"],
    answer: "+234"
  },
  {
    question: "Which Nigerian footballer plays for Napoli (2025)?",
    options: ["Ahmed Musa", "Victor Osimhen", "Alex Iwobi", "Joe Aribo"],
    answer: "Victor Osimhen"
  },
  {
    question: "Which court is the highest in Nigeria?",
    options: ["Appeal Court", "Magistrate Court", "Supreme Court", "Federal Court"],
    answer: "Supreme Court"
  },
  {
    question: "Where is the Aso Rock located?",
    options: ["Abuja", "Lagos", "Kaduna", "Kano"],
    answer: "Abuja"
  },
  {
    question: "Which day is celebrated as Democracy Day in Nigeria?",
    options: ["October 1", "May 29", "June 12", "January 1"],
    answer: "June 12"
  },
  {
    question: "Who was the first president of Nigeria?",
    options: ["Obafemi Awolowo", "Nnamdi Azikiwe", "Tafawa Balewa", "Yakubu Gowon"],
    answer: "Nnamdi Azikiwe"
  },
  {
    question: "Which state is known as the 'Land of Promise'?",
    options: ["Cross River", "Akwa Ibom", "Bayelsa", "Delta"],
    answer: "Akwa Ibom"
  },
  {
    question: "What does EFCC stand for?",
    options: ["Economic and Financial Crimes Commission", "Economic Fraud Control Center", "Ethics and Fiscal Crimes Commission", "Elite Fraud Control Commission"],
    answer: "Economic and Financial Crimes Commission"
  },
  {
    question: "How many states does Nigeria have?",
    options: ["36", "30", "35", "37"],
    answer: "36"
  },
  {
    question: "What does NYSC stand for?",
    options: ["Nigerian Youth Service Corps", "National Youth Service Commission", "National Youth Service Corps", "Nigerian Young Security Corps"],
    answer: "National Youth Service Corps"
  },
  {
    question: "Which year was Boko Haram officially declared a terrorist group?",
    options: ["2009", "2013", "2007", "2015"],
    answer: "2013"
  },
  {
    question: "Which body conducts elections in Nigeria?",
    options: ["EFCC", "INEC", "NPC", "NASS"],
    answer: "INEC"
  },
  {
    question: "Which is Nigeria's official language?",
    options: ["Yoruba", "Pidgin", "English", "Hausa"],
    answer: "English"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const retryBtn = document.getElementById("retry-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectAnswer(button, currentQuestion.answer));
    optionsElement.appendChild(button);
  });

  // Show submit if last question
  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.classList.add("hide");
    submitBtn.classList.remove("hide");
  }

  startTimer();
}

function resetState() {
  clearInterval(timer);
  timeLeft = 10;
  timeElement.textContent = timeLeft;
  optionsElement.innerHTML = "";
  nextBtn.classList.add("hide");
  submitBtn.classList.add("hide");
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeElement.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      disableOptions();
      nextBtn.classList.remove("hide");
    }
  }, 1000);
}

function selectAnswer(selectedButton, correctAnswer) {
  const allOptions = optionsElement.querySelectorAll("button");
  allOptions.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
  });

  if (selectedButton.textContent === correctAnswer) {
    score++;
  }

  clearInterval(timer);
  nextBtn.classList.remove("hide");
}

function disableOptions() {
  const allOptions = optionsElement.querySelectorAll("button");
  allOptions.forEach(btn => btn.disabled = true);
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
});

submitBtn.addEventListener("click", () => {
  showScore();
});

retryBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.classList.add("hide");
  retryBtn.classList.add("hide");
  showQuestion();
});

function showScore() {
  questionElement.textContent = "";
  optionsElement.innerHTML = "";
  nextBtn.classList.add("hide");
  submitBtn.classList.add("hide");
  scoreContainer.classList.remove("hide");
  // 🔧 Manual fix: directly set score text
  document.getElementById("score").textContent = score + " / " + questions.length;
  retryBtn.classList.remove("hide");
}

showQuestion();
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});