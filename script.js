document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    const formData = new FormData();
    formData.append('email', email);

    fetch('https://your-api-endpoint.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = '/success.html';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}