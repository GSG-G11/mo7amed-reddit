/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

// sign up selectors
const signupPassword = document.getElementById('signup-password');
const signupEmail = document.getElementById('signup-email');
const signupUsername = document.getElementById('signup-username');
const signupLink = document.getElementById('signup-link');

const signupCancel = document.getElementById('signup-cancel');
const signupSubmit = document.getElementById('signup-submit');
const signupBackground = document.getElementsByClassName('signup-form')[0];
const signupContainer = document.getElementsByClassName('signup-container')[0];

// log in selectors
const loginPassword = document.getElementById('login-password');
const loginEmail = document.getElementById('login-email');
const loginCancel = document.getElementById('cancel-icon');
const loginSubmit = document.getElementById('login-submit');
const loginBackground = document.getElementsByClassName('login-form')[0];
const loginContainer = document.getElementsByClassName('form-container')[0];

// show and hide buttons
const showLogin = document.getElementById('login-btn');
const showSignup = document.getElementById('signup-btn');
const showAddPost = document.getElementById('add-post-button');

// add post selectors
const addPostContainer =
  document.getElementsByClassName('add-post-container')[0];
const addPostBackground = document.getElementsByClassName('add-post-form')[0];
const addPostCancel = document.getElementById('add-post-cancel');

// show modals
showLogin.addEventListener('click', () => {
  loginContainer.style.display = 'block';
  loginBackground.style.display = 'flex';
});
showSignup.addEventListener('click', () => {
  signupContainer.style.display = 'block';
  signupBackground.style.display = 'flex';
});
showAddPost.addEventListener('click', () => {
  addPostContainer.style.display = 'block';
  addPostBackground.style.display = 'flex';
});

// hide modals
signupCancel.addEventListener('click', () => {
  signupContainer.style.display = 'none';
  signupBackground.style.display = 'none';
  signupEmail.value = '';
  signupPassword.value = '';
});
addPostCancel.addEventListener('click', () => {
  addPostContainer.style.display = 'none';
  addPostBackground.style.display = 'none';
});
loginCancel.addEventListener('click', () => {
  loginContainer.style.display = 'none';
  loginBackground.style.display = 'none';
  loginEmail.value = '';
  loginPassword.value = '';
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

const isPassword = (password) => {
  const passwordLength = password.split('').length;
  return passwordLength > 8;
};
const isEmail = (email) => (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  email,
));

function loginCheckInputs() {
  // trim to remove the whitespaces
  const loginEmailValue = loginEmail.value.trim();
  const loginPasswordValue = loginPassword.value.trim();

  if (loginEmailValue === '') {
    setErrorFor(loginEmail, 'Email cannot be blank');
  } else if (!isEmail(loginEmailValue)) {
    setErrorFor(loginEmail, 'Not a valid email');
  } else {
    setSuccessFor(loginEmail);
  }

  if (loginPasswordValue === '') {
    setErrorFor(loginPassword, 'Password cannot be blank');
  } else if (!isPassword(loginPasswordValue)) {
    setErrorFor(loginPassword, 'Not a valid password');
  } else {
    setSuccessFor(loginPassword);
    login();
  }
}

function signupCheckInputs() {
  const signupEmailValue = signupEmail.value.trim();
  const signupPasswordValue = signupPassword.value.trim();
  const signupUsernameValue = signupUsername.value.trim();
  const signupLinkValue = signupLink.value.trim();

  if (signupEmailValue === '') {
    setErrorFor(signupEmail, 'Email cannot be blank');
  } else if (!isEmail(signupEmailValue)) {
    setErrorFor(signupEmail, 'Not a valid email');
  } else {
    setSuccessFor(signupEmail);
  }
  if (signupPasswordValue === '') {
    setErrorFor(signupPassword, 'Password cannot be blank');
  } else if (!isPassword(signupPasswordValue)) {
    setErrorFor(signupPassword, 'Not a valid password');
  } else {
    setSuccessFor(signupPassword);
  }
  if (signupUsernameValue === '') {
    setErrorFor(signupUsername, 'username cannot be blank');
  } else {
    setSuccessFor(signupUsername);
  }
  if (signupLinkValue === '') {
    setErrorFor(signupLink, ' please try to fill the image url');
  } else {
    setSuccessFor(signupLink);
    signup();
  }
}

// log in submit
loginSubmit.addEventListener('click', () => {
  loginCheckInputs();
});

// signup submit
signupSubmit.addEventListener('click', () => {
  signupCheckInputs();
});

const login = () => {
  const request = {
    method: 'POST',
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch('/signup', request)
    .then((result) => result.json())
    .then((res) => {
      console.log(res);
      if (res.status === 400) {
        swal('Warning !', res.msg, 'warning');
      } else if (res.status === 500) {
        swal('Warning !', res.msg, 'warning');
      } else {
        window.location.href = '/posts';
      }
    });
};
//  create xhr post request sign up
const signup = () => {
  const request = {
    method: 'POST',
    body: JSON.stringify({
      username: signupUsername.value,
      email: signupEmail.value,
      image: signupLink.value,
      password: signupPassword.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch('/signup', request)
    .then((result) => result.json())
    .then((res) => {
      if (res.status === 400) {
        swal('Warning !', res.msg, 'warning');
      } else if (res.status === 500) {
        swal('Warning !', res.msg, 'warning');
      } else {
        window.location.href = '/posts';
      }
    });
};
