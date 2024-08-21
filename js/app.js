const form = document.getElementById('form');
const username = document.getElementById('username');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(firstnameValue === '') {
    setError(firstname, 'First Name is required');
  } else {
    setSuccess(firstname);
  }
  if(lastnameValue === '') {
    setError(lastname, 'Last name is required');
  } else {
    setSuccess(lastname);
  }
  if(usernameValue === '') {
    setError(username, 'User Name is required');
  } else {
    setSuccess(username);
  }

  if(emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  if(passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length < 8 ) {
    setError(password, 'Password must be at least 8 character.')
  } else {
    setSuccess(password);
  }

  if(password2Value === '') {
    setError(password2, 'Please confirm your password');
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }


  // Print the data to the console
  console.log('First Name:', firstnameValue);
  console.log('Last Name:', lastnameValue);
  console.log('User Name:', usernameValue);
  console.log('Email:', emailValue);
  console.log('Password:', passwordValue);
  console.log('Confirm Password:', password2Value);
};



