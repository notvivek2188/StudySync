const questions = [
  {
    q: "1. Which feature was NOT part of the Indus Valley Civilization?",
    options: [
      "Well-planned cities",
      "Script on clay tablets",
      "Monarchy rule",
      "Drainage system"
    ],
    answer: 2
  },
  {
    q: "2. What is the primary function of the Indian Parliament?",
    options: [
      "Conduct local elections",
      "Make laws",
      "Supervise judiciary",
      "Control media"
    ],
    answer: 1
  },
  {
    q: "3. What is federalism?",
    options: [
      "A type of dictatorship",
      "A union of independent nations",
      "Division of powers between central and state governments",
      "Rule by military"
    ],
    answer: 2
  },
  {
    q: "4. Which of the following is NOT a fundamental right in India?",
    options: [
      "Right to Equality",
      "Right to Property",
      "Right to Freedom",
      "Right to Education"
    ],
    answer: 1
  },
  {
    q: "5. What did the French Revolution NOT promote?",
    options: [
      "Liberty",
      "Equality",
      "Fraternity",
      "Colonialism"
    ],
    answer: 3
  },
  {
    q: "6. What does globalization affect?",
    options: [
      "Only politics",
      "Only culture",
      "Only education",
      "Multiple aspects like economy, culture, and politics"
    ],
    answer: 3
  },
  {
    q: "7. Who was the Viceroy during the Revolt of 1857?",
    options: [
      "Lord Curzon",
      "Lord Dalhousie",
      "Lord Canning",
      "Lord Ripon"
    ],
    answer: 2
  },
  {
    q: "8. The Harappan script is:",
    options: [
      "Fully deciphered",
      "A modern language",
      "Still undeciphered",
      "Written in Sanskrit"
    ],
    answer: 2
  },
  {
    q: "9. What was Gandhi’s primary strategy for independence?",
    options: [
      "Violence",
      "Passive resistance",
      "Terrorism",
      "Non-cooperation and non-violence"
    ],
    answer: 3
  },
  {
    q: "10. Which one of the following is an example of erosion?",
    options: [
      "River cutting through a valley",
      "Soil forming from rock",
      "Fungi breaking down leaves",
      "Plant roots growing"
    ],
    answer: 0
  }
];

const quizForm = document.getElementById("quizForm");

questions.forEach((q, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("h4");
  questionTitle.textContent = q.q;
  questionDiv.appendChild(questionTitle);

  q.options.forEach((option, i) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index}`;
    input.value = i;
    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + option));
    questionDiv.appendChild(label);
  });

  quizForm.appendChild(questionDiv);
});

function submitQuiz() {
  let score = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `You scored <strong>${score} out of ${questions.length}</strong>. ${score >= 7 ? "Excellent work! 🎉" : score >= 4 ? "Good effort! Keep practicing. 💪" : "Needs improvement. Try again! 📘"}`;
}
