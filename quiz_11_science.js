const questions = [
  {
    q: "1. Which of the following is not a scalar quantity?",
    options: [
      "Speed",
      "Distance",
      "Displacement",
      "Mass"
    ],
    answer: 2
  },
  {
    q: "2. Which of the following has the highest ionization enthalpy?",
    options: [
      "Lithium",
      "Beryllium",
      "Boron",
      "Carbon"
    ],
    answer: 1
  },
  {
    q: "3. The phase of the cell cycle where DNA replication occurs is:",
    options: [
      "G1 phase",
      "G2 phase",
      "S phase",
      "M phase"
    ],
    answer: 2
  },
  {
    q: "4. Which law states that pressure is inversely proportional to volume at constant temperature?",
    options: [
      "Charles' Law",
      "Boyle's Law",
      "Avogadro's Law",
      "Gay-Lussac’s Law"
    ],
    answer: 1
  },
  {
    q: "5. Which of the following is not true for enzymes?",
    options: [
      "They are proteins",
      "They get consumed in reactions",
      "They lower activation energy",
      "They are specific to substrates"
    ],
    answer: 1
  },
  {
    q: "6. The acceleration of a particle is zero when:",
    options: [
      "It moves with uniform speed in a straight line",
      "It moves in a circle",
      "Its velocity is changing",
      "It is at rest"
    ],
    answer: 0
  },
  {
    q: "7. Which orbital has spherical symmetry?",
    options: [
      "2p",
      "3d",
      "1s",
      "4f"
    ],
    answer: 2
  },
  {
    q: "8. Which of these is a non-reducing sugar?",
    options: [
      "Maltose",
      "Lactose",
      "Glucose",
      "Sucrose"
    ],
    answer: 3
  },
  {
    q: "9. What is the unit of Planck's constant?",
    options: [
      "Joule",
      "Joule/second",
      "Joule-second",
      "Second"
    ],
    answer: 2
  },
  {
    q: "10. Which process is responsible for the absorption of water by roots?",
    options: [
      "Transpiration",
      "Diffusion",
      "Osmosis",
      "Capillary action"
    ],
    answer: 2
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
