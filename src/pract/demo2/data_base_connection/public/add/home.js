document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginStatus = document.getElementById('login-status');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simulate a simple login check (for demo purposes only)
        if (username === 'sunil' && password === 'root') {
            loginStatus.textContent = 'Login successful!';
            loginStatus.style.color = 'green';
        } else {
            loginStatus.textContent = 'Invalid username or password.';
            loginStatus.style.color = 'red';
        }
    });
});
