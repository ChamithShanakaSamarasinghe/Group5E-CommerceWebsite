const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');
const loginButton = document.querySelector('button');

loginButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  const rememberMe = rememberMeCheckbox.checked;

  // Perform login logic here...
  // For example, make an API call to authenticate the user

  // If login is successful, redirect the user to the dashboard
  window.location.href = 'https://example.com/dashboard';

  // If login fails, display an error message
  alert('Invalid email or password. Please try again.');
});
