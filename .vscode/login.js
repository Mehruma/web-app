document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the selected role
    const role = this.querySelector('select').value;
    
    // You can also add validation here if needed

    // Redirect based on role
    switch(role) {
        case 'employee':
            window.location.href = 'employee.html'; // Redirect to employee page
            break;
        case 'hr':
            window.location.href = 'hr.html'; // Redirect to HR page (assuming you have this page)
            break;
        case 'therapist':
            window.location.href = 'therapist.html'; // Redirect to therapist page (assuming you have this page)
            break;
        default:
            alert('Please select a role'); // Alert user if no role is selected
    }
});
