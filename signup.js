// Get the form element
const signUpForm = document.getElementById('signUpForm');

// Add event listener for form submission
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the input values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  // Validate the input values
  if (firstName === '' || lastName === '' || email === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create an object with the lead information
  const lead = {
    firstName,
    lastName,
    email
  };

  // Send the lead information to the server (you can use AJAX or fetch API here)
  // Example using fetch API:
  fetch('https://example.com/api/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(lead)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      console.log(data); // You can customize this based on your needs
      alert('Thank you for signing up!');
      signUpForm.reset(); // Reset the form
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
});