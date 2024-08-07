const card = document.querySelector('.card');
const signupflib = document.querySelector('.signup-flib');
const formlogin = document.querySelector('#login');
const formsignUp = document.querySelector('#SignUp');

let storedUsers = JSON.parse(localStorage.getItem('UserData')) || [];

function checkValidationLogin() {
  const emailInput = document.querySelector('#emailInput');
  const passwordInput = document.querySelector('#passwordInput');

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;

  let hasError = false;
  if (!emailPattern.test(emailInput.value.trim()) || emailInput.value.trim() === '') {
    emailInput.classList.add('error');
    hasError = true;
  } else {
    emailInput.classList.remove('error');
  }

  if (!passwordPattern.test(passwordInput.value.trim())) {
    passwordInput.classList.add('error');
    hasError = true;
  } else {
    passwordInput.classList.remove('error');
  }

  if (!hasError) {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const storedUser = storedUsers.find(
      (user) => user.Useremail === email && user.Password === password
    );
    if (storedUser) {
      window.location.href = '../pages/home.html';
      return;
    } else{
      document.querySelectorAll("input").forEach((input) => input.value = "")
    }
  }
}

formlogin.addEventListener('submit', (e) => {
  e.preventDefault();
  checkValidationLogin();
});

function flipped() {
  card.classList.toggle('flipped');
  document.title = "MAS Hospital | SignUp"
}

signupflib.addEventListener('click', flipped);

function checkValidationSignUp() {
  const userName = document.querySelector('#userName');
  const emailInput = document.querySelector('#emailinput');
  const passwordInput = document.querySelector('#passwordinput'); 
  const phoneInput = document.querySelector('#phoneNumber');

  const usernamePattern = /^[a-zA-Z0-9_ ]{3,20}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  const phonePattern = /^\+\d{2}\d{10}$/;
  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;

  let hasError = false;

  if (!usernamePattern.test(userName.value) || userName.value.trim() === "") {
    userName.classList.add('error'); 
    hasError = true;
  } else {
    userName.classList.remove('error');
  }

  if (!emailPattern.test(emailInput.value.trim()) || emailInput.value.trim() === '') {
    emailInput.classList.add('error');
    hasError = true;
  } else {
    emailInput.classList.remove('error');
  }

  if (!passwordPattern.test(passwordInput.value.trim())) {
    passwordInput.classList.add('error');
    hasError = true;
  } else {
    passwordInput.classList.remove('error');
  }

  if (!phonePattern.test(phoneInput.value.trim()) || phoneInput.value.trim() === "") {
    phoneInput.classList.add('error'); 
    hasError = true;
  } else {
    phoneInput.classList.remove('error');
  }

  if (!hasError) {
    const username = userName.value;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const phoneNumber = phoneInput.value.trim();

    const newUser = {
      user: username,
      Useremail: email,
      Password: password,
      phoneNumber: phoneNumber,
    };

    storedUsers.push(newUser);
    localStorage.setItem('UserData', JSON.stringify(storedUsers));
    flipped();
    document.title = "MAS Hospital | Login"
    document.querySelectorAll("input").forEach((input) => input.value = "")
  }
}

formsignUp.addEventListener("submit", (e) => {
  e.preventDefault();
  checkValidationSignUp();
});
