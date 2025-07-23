const questions = [
  {
    q: "1. In a PN junction diode, the depletion layer is formed due to:",
    options: [
      "Drift of electrons and holes",
      "Diffusion of charge carriers",
      "Application of external voltage",
      "Movement of atoms"
    ],
    answer: 1
  },
  {
    q: "2. Which compound will not give a positive Iodoform test?",
    options: [
      "Ethanol",
      "Acetone",
      "2-Propanol",
      "Methanol"
    ],
    answer: 3
  },
  {
    q: "3. Which part of the nephron is impermeable to water?",
    options: [
      "Proximal convoluted tubule",
      "Descending limb of Henle’s loop",
      "Ascending limb of Henle’s loop",
      "Collecting duct"
    ],
    answer: 2
  },
  {
    q: "4. Which of the following shows maximum adsorption of gases?",
    options: [
      "Colloidal solutions",
      "Powdered solids",
      "Crystalline solids",
      "Non-porous solids"
    ],
    answer: 1
  },
  {
    q: "5. The binding energy per nucleon is maximum for:",
    options: [
      "Uranium-235",
      "Iron-56",
      "Deuterium",
      "Helium-4"
    ],
    answer: 1
  },
  {
    q: "6. Which of the following is NOT a post-fertilization event?",
    options: [
      "Formation of endosperm",
      "Formation of fruit",
      "Pollination",
      "Embryo development"
    ],
    answer: 2
  },
  {
    q: "7. Which compound is used as a preservative for biological specimens?",
    options: [
      "Formaldehyde",
      "Benzene",
      "Acetic acid",
      "Chloroform"
    ],
    answer: 0
  },
  {
    q: "8. Which of the following is an electrophilic substitution reaction?",
    options: [
      "Halogenation of alkanes",
      "Hydrolysis of esters",
      "Nitration of benzene",
      "Dehydration of alcohols"
    ],
    answer: 2
  },
  {
    q: "9. What is the SI unit of magnetic flux?",
    options: [
      "Tesla",
      "Weber",
      "Henry",
      "Farad"
    ],
    answer: 1
  },
  {
    q: "10. Which hormone stimulates the Leydig cells to secrete testosterone?",
    options: [
      "FSH",
      "LH",
      "TSH",
      "GH"
    ],
    answer: 1
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
