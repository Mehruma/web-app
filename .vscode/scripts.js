// Show the corresponding section based on link clicks
document.querySelector('.navbar a[href="#login"]').addEventListener('click', function() {
    showSection('login');
});
document.querySelector('.navbar a[href="#signup"]').addEventListener('click', function() {
    showSection('signup');
});

// Function to show the selected section and hide others
function showSection(section) {
    const sections = ['login', 'signup'];
    sections.forEach(id => {
        document.querySelector(`.${id}`).style.display = (id === section) ? 'block' : 'none';
    });
}

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const userType = document.getElementById('userType').value;  // Get selected user type
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;

    // Simulate login logic
    if (email && password && userType) {
        document.getElementById('loginMessage').innerText = `Login successful! You are logged in as ${userType.charAt(0).toUpperCase() + userType.slice(1)}.`;
    } else {
        document.getElementById('loginMessage').innerText = 'Please enter valid credentials.';
    }
});

// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('emailSignup').value;
    const password = document.getElementById('passwordSignup').value;

    // Simulate signup logic
    if (name && email && password) {
        document.getElementById('signupMessage').innerText = 'Signup successful! You can now log in.';
    } else {
        document.getElementById('signupMessage').innerText = 'Please fill all fields.';
    }
});

// Show the login section on initial load
showSection('login');
