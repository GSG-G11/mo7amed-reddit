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
const imageLink = document.getElementById('link');
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
      console.log(res)
      if (res.status === 400) {
        swal('Warning !', res.msg, 'warning');
      } else if (res.status === 500) {
        swal('Warning !', res.msg, 'warning');
      } else {
        window.location.href = '/user';
        createPost(res);
      }
    });
};

fetch('/posts')
  .then((data) => data.json())
  .then((data) => createPost(data))
  .catch((err) => {
    if (err.status === 400) {
      swal('Warning !', err.msg, 'warning');
    } else if (err.status === 500) {
      swal('Warning !', err.msg, 'warning');
    } else {
      swal('Warning !', err.msg, 'warning');
    }
  });

const postsHolder = document.getElementsByClassName('container')[0];
const createPost = (array) => {
  array.forEach((element) => {
    const postContainer = document.createElement('div');
    const votesContainer = document.createElement('div');
    const upvote = document.createElement('i');
    const downvote = document.createElement('i');
    const votesH5 = document.createElement('h5');
    postContainer.id = 'posts-container';
    votesContainer.id = 'votes';
    upvote.className = 'fa-solid fa-chevron-up';
    downvote.className = 'fa-solid fa-chevron-down';
    votesH5.textContent = element.votes_number;
    votesContainer.appendChild(upvote);
    votesContainer.appendChild(votesH5);
    votesContainer.appendChild(downvote);
    const post = document.createElement('div');
    const content = document.createElement('div');
    post.id = 'post';
    const userInfo = document.createElement('div');
    userInfo.className = 'user-info';
    const userName = document.createElement('h5');
    const userPost = document.createElement('p');
    const image = document.createElement('img');
    userName.textContent = element.username;
    userPost.textContent = element.description;
    image.src = element.image;
    userInfo.appendChild(userName);
    content.appendChild(userInfo);
    content.appendChild(userPost);
    content.appendChild(image);

    const commentContainer = document.createElement('div');
    commentContainer.id = 'comments';

    const commentIcon = document.createElement('i');
    const commentNumber = document.createElement('span');
    const commentStr = document.createElement('span');

    commentIcon.className = 'fa-regular fa-comment';
    commentNumber.textContent = element.comments;
    commentStr.textContent = 'comments';
    commentContainer.appendChild(commentIcon);
    commentContainer.appendChild(commentStr);
    commentContainer.appendChild(commentNumber);
    postContainer.appendChild(votesContainer);
    post.appendChild(content);
    post.appendChild(commentContainer);

    postContainer.appendChild(post);

    postsHolder.insertBefore(postContainer, postsHolder.children[0]);
  });
};
const nameUser = document.getElementById('user-name');
fetch('/cookie')
  .then((data) => data.json())
  .then((data) => {
    if (data.msg === 'You are logged in') {
     nameUser.textContent = data.data.email.split('@')[0];
    }
    else {
      window.location.href = '/';
    }
  })
  .catch((err) => {
    if (err.status === 400) {
      swal('Warning !', err.msg, 'warning');
    } else if (err.status === 500) {
      swal('Warning !', err.msg, 'warning');
    }
  });
const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
  logOut();
});
  
const logOut = () => {
  const request = {
    method: 'POST'
  };
  return fetch('/logout', request)
    .then((result) => result.json())
    .then((data) => {
      console.log(data)
    });
};