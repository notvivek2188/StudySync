const questions = [
  {
    q: "1. In the absence of a partnership deed, interest on capital is:",
    options: [
      "Allowed @ 6% p.a.",
      "Allowed @ 5% p.a.",
      "Not allowed",
      "Allowed as per profit-sharing ratio"
    ],
    answer: 2
  },
  {
    q: "2. Which of the following is not shown under financing activities in a cash flow statement?",
    options: [
      "Proceeds from issue of shares",
      "Redemption of debentures",
      "Payment of dividend",
      "Purchase of fixed assets"
    ],
    answer: 3
  },
  {
    q: "3. A decrease in the provision for doubtful debts results in:",
    options: [
      "Decrease in profit",
      "Increase in liabilities",
      "Increase in profit",
      "No impact on profit"
    ],
    answer: 2
  },
  {
    q: "4. Which one of the following is not a characteristic of a public company?",
    options: [
      "Minimum 7 members",
      "Unlimited liability",
      "Transferability of shares",
      "Can invite public to subscribe to shares"
    ],
    answer: 1
  },
  {
    q: "5. In monopolistic competition, the firm has:",
    options: [
      "No control over price",
      "Complete control over price",
      "Some degree of control over price",
      "Government-controlled prices"
    ],
    answer: 2
  },
  {
    q: "6. The main objective of financial management is to:",
    options: [
      "Maximize profits",
      "Ensure liquidity",
      "Maximize shareholder's wealth",
      "Minimize costs"
    ],
    answer: 2
  },
  {
    q: "7. When national income is calculated at current prices, it is called:",
    options: [
      "Real national income",
      "Nominal national income",
      "Disposable income",
      "Per capita income"
    ],
    answer: 1
  },
  {
    q: "8. A debenture is:",
    options: [
      "An ownership instrument",
      "A type of reserve",
      "A long-term liability",
      "A short-term asset"
    ],
    answer: 2
  },
  {
    q: "9. The principle of equity in management refers to:",
    options: [
      "Equality in salary",
      "Equal ownership",
      "Fair treatment of all employees",
      "Equal responsibilities"
    ],
    answer: 2
  },
  {
    q: "10. Which of the following is a qualitative credit control tool used by RBI?",
    options: [
      "Repo rate",
      "Bank rate",
      "Open market operations",
      "Moral suasion"
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
