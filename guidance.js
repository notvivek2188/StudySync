document.getElementById("questionForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const question = document.getElementById("userQuestion").value.trim();
  if (question) {
    alert("Your question has been submitted! ✅");
    document.getElementById("userQuestion").value = "";
  }
});
