const questions = [
  {
    q: "1. Who was the first President of independent India?",
    options: [
      "Jawaharlal Nehru",
      "Dr. B.R. Ambedkar",
      "Dr. Rajendra Prasad",
      "Sardar Vallabhbhai Patel"
    ],
    answer: 2
  },
  {
    q: "2. What does the term 'Cold War' refer to?",
    options: [
      "A war fought in the Arctic region",
      "A war without weapons",
      "Tension and rivalry between USA and USSR post World War II",
      "A civil war in Germany"
    ],
    answer: 2
  },
  {
    q: "3. Which movement is associated with environmental conservation in India?",
    options: [
      "Dandi March",
      "Chipko Movement",
      "Quit India Movement",
      "Swadeshi Movement"
    ],
    answer: 1
  },
  {
    q: "4. What is 'secularism'?",
    options: [
      "Rule by religious leaders",
      "State without any religion",
      "Equal respect for all religions by the state",
      "Banning religious practices"
    ],
    answer: 2
  },
  {
    q: "5. Who introduced the Doctrine of Lapse in British India?",
    options: [
      "Lord Mountbatten",
      "Lord Canning",
      "Lord Curzon",
      "Lord Dalhousie"
    ],
    answer: 3
  },
  {
    q: "6. What is the main focus of Human Geography?",
    options: [
      "Volcanoes and earthquakes",
      "Human activities and their relationship with the environment",
      "Ocean currents",
      "Mountains and rivers"
    ],
    answer: 1
  },
  {
    q: "7. Sociology is best defined as:",
    options: [
      "Study of animals in society",
      "Study of past civilizations",
      "Study of human society and social behavior",
      "Study of government policies"
    ],
    answer: 2
  },
  {
    q: "8. What is meant by 'urbanization'?",
    options: [
      "Development of villages",
      "Shift of population from cities to villages",
      "Increase in the number of towns and cities",
      "Industrial decline"
    ],
    answer: 2
  },
  {
    q: "9. Which article of the Indian Constitution guarantees the Right to Education?",
    options: [
      "Article 14",
      "Article 19",
      "Article 21A",
      "Article 32"
    ],
    answer: 2
  },
  {
    q: "10. Which event marked the beginning of the end of colonialism in India?",
    options: [
      "Non-Cooperation Movement",
      "Jallianwala Bagh Massacre",
      "World War II",
      "Quit India Movement"
    ],
    answer: 3
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
