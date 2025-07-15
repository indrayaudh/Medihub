function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.innerText = 'Please fill out both fields.';
        return false;
    }

    // Simulate login validation (you can replace this with actual authentication logic)
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        return true;
    } else {
        errorMessage.innerText = 'Invalid username or password.';
        return false;
    }
}
