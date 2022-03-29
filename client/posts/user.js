/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
// show and hide buttons
const showAddPost = document.getElementById('add-post-button');

// add post selectors
const addPostContainer =
  document.getElementsByClassName('add-post-container')[0];
const addPostBackground = document.getElementsByClassName('add-post-form')[0];
const addPostCancel = document.getElementById('add-post-cancel');
const description = document.getElementById('add-description');
const title = document.getElementById('add-title');
const submitBtn = document.getElementById('submit-post');
showAddPost.addEventListener('click', () => {
  addPostContainer.style.display = 'block';
  addPostBackground.style.display = 'flex';
});

// hide modals

addPostCancel.addEventListener('click', () => {
  addPostContainer.style.display = 'none';
  addPostBackground.style.display = 'none';
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

function checkInputs() {
  const descriptionValue = description.value.trim();
  const titleValue = title.value.trim();

  if (descriptionValue === '') {
    setErrorFor(description, 'Description is required');
  } else {
    setSuccessFor(description);
  }
  if (titleValue === '') {
    setErrorFor(title, 'title cannot be blank');
  } else {
    setSuccessFor(title);
    addPOST();
  }
}

// addpost  submit
submitBtn.addEventListener('click', () => {
  checkInputs();
});

const addPOST = () => {
  const request = {
    method: 'POST',
    body: JSON.stringify({
      title: title.value,
      description: description.value,
      image: imageLink.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch('/posts', request)
    .then((result) => result.json())
    .then((res) => {
      if (res.status === 400) {
        swal('Warning !', res.msg, 'warning');
      } else if (res.status === 500) {
        swal('Warning !', res.msg, 'warning');
      } else {
        window.location.href = '/hello';
      }
    });
};
// const isAuth = () => {
//   const cookies = document.cookie;
//   if (cookies) {
//     if (cookies.split('=')[0] === 'accessToken') {
//       return true;
//     }
//   }
//   return false;
// };
