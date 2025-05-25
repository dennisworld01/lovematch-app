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

    fetch("https://script.google.com/macros/s/AKfycbw0nxnQ-Oo5CcA3bv1F0nJhLp6OCoXPZSqb9HJrRZgtLBsxdKaRxz-lKUPNULrkgs5C/exec", {
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

      // Redirect to your affiliate offer after 3 seconds
      setTimeout(() => {
        window.location.href = "https://youtube.com/@crownsport24?si=NyPSyNloUMbmNpxX"; // Replace with real CPL URL
      }, 3000);
    })
    .catch(err => {
      alert("Submission failed. Please try again.");
      console.error(err);
    });
  }
});
