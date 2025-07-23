const questions = [
  {
    q: "1. Which of the following is not a limitation of accounting?",
    options: [
      "Ignores qualitative information",
      "Based on historical cost",
      "Follows dual aspect concept",
      "Subject to personal judgment"
    ],
    answer: 2
  },
  {
    q: "2. In case of a prepaid expense, which of the following accounts is debited?",
    options: [
      "Expense Account",
      "Cash Account",
      "Prepaid Expense Account",
      "Capital Account"
    ],
    answer: 2
  },
  {
    q: "3. Which one of the following is not a characteristic of a business activity?",
    options: [
      "Deals with goods and services",
      "Done regularly",
      "Involves production only",
      "Aims at earning profit"
    ],
    answer: 2
  },
  {
    q: "4. Which of the following is considered a microeconomic study?",
    options: [
      "Unemployment in India",
      "National Income",
      "Demand and supply of a product",
      "Inflation rate in the country"
    ],
    answer: 2
  },
  {
    q: "5. A trial balance is prepared to:",
    options: [
      "Record transactions",
      "Prepare final accounts",
      "Check arithmetical accuracy of ledger",
      "Rectify errors"
    ],
    answer: 2
  },
  {
    q: "6. The assumption of ceteris paribus means:",
    options: [
      "Everything changes",
      "Everything remains constant except the variable under study",
      "Prices change constantly",
      "Resources are unlimited"
    ],
    answer: 1
  },
  {
    q: "7. Which one of the following statements is incorrect in context to GST?",
    options: [
      "It replaced multiple indirect taxes",
      "It has four major slabs",
      "It is levied only on income",
      "It aims to create a unified tax structure"
    ],
    answer: 2
  },
  {
    q: "8. In economics, opportunity cost means:",
    options: [
      "The actual cost of production",
      "The cost of the next best alternative forgone",
      "The profit earned",
      "The total revenue"
    ],
    answer: 1
  },
  {
    q: "9. Ledger is prepared after:",
    options: [
      "Journal",
      "Trial Balance",
      "Final Accounts",
      "Balance Sheet"
    ],
    answer: 0
  },
  {
    q: "10. A business organization owned and managed by a single individual is called:",
    options: [
      "Partnership",
      "Sole Proprietorship",
      "Co-operative Society",
      "Private Company"
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
