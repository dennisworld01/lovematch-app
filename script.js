document.getElementById("loveForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const statusMessage = document.getElementById("statusMessage");

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzKEXS00M503sHDysvEk_2bfw_m6Qm2YVs5NkkQsjO8PTmJhwuGd0t5aaVgLS7g-AGX/exec", {
      method: "POST",
      body: data
    });

    if (response.ok) {
      statusMessage.textContent = "Match found! Redirecting...";
      setTimeout(() => {
        window.location.href = "https://youtube.com/@crownsport24?si=pnxycXF0vYghzzZe";
      }, 1500);
    } else {
      statusMessage.textContent = "Submission failed. Please try again.";
    }
  } catch (error) {
    console.error("Error:", error);
    statusMessage.textContent = "An error occurred.";
  }
});
