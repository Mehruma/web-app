document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // You can add code here to validate the form, send data to the server, etc.

    // For now, we'll just redirect to the employee page
    window.location.href = 'employee.html'; // Redirect to employee page after signup
});
