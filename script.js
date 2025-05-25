document.getElementById("lovematch-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const q1 = document.querySelector('input[name="q1"]:checked')?.value || "";
    const q2 = document.querySelector('input[name="q2"]:checked')?.value || "";

    const payload = {
      name,
      email,
      q1,
      q2
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxKVLr4fjxcT3rKnnd8mGckETCr-nD2W4U-o8u34ojYweZcyNJMI89bMSmySg7yJWXE/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      const result = await response.text();

      if (result.includes("Success")) {
        alert("Submission successful! Check your email soon.");
      } else {
        alert("Submission failed: " + result);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
