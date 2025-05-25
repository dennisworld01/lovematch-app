document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const q1 = document.getElementById("question1").value;
  const q2 = document.getElementById("question2").value;

  if (name && email) {
    const formData = {
      name,
      email,
      q1,
      q2
    };

    fetch("https://script.google.com/macros/s/AKfycbxwE1JSMPUSJ-trW-8kOeKvT5cH5Ncoay-UsB57vBZ-lcNwDSz_lWHd0C-_t03STCsF/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.text())
    .then(() => {
      document.getElementById("quizForm").classList.add("hidden");
      document.getElementById("result").classList.remove("hidden");

      // Redirect to your dating CPL offer
      setTimeout(() => {
        window.location.href = "https://youtube.com/@crownsport24?si=19M6Y5j62ODR5xFc"; // Replace with actual affiliate link
      }, 3000);
    })
    .catch(err => {
      alert("Submission failed. Please try again.");
      console.error(err);
    });
  }
});
