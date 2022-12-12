const USER_API = "https://api.github.com/users/{{name}}"
const form = document.querySelector('#userForm');
const nameInput = document.querySelector('#nameInput');
const userInfoContainer = document.querySelector('#userInfoContainer');
const userTemplate = document.querySelector('#userTemplate').innerHTML;

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(e) {
  e.preventDefault();

  const name = nameInput.value;

  getUser(name)
    .then((user) => {
      renderUser(user);
      clearForm();
    })
    .catch((e) => {
      alert(e.message)
    })
}

function getUser(name) {
  return fetch(USER_API.replace('{{name}}', name))
    .then(res => {
      if (res.ok) { // 200 – 299
        return res.json();
      }

      // if (res.status === 400 || res.status === 404) {
      //   throw new Error('Can not fetch user info')
      // }
      //
      // throw new Error('Can not execute request')

      throw new Error('Can not fetch user info');
    })
}

function renderUser(user) {
  const html = generateUserHTML(user);

  userInfoContainer.innerHTML = html;
}

function generateUserHTML(user) {
  return userTemplate
    .replace('{{avatar_url}}', user.avatar_url)
    .replace('{{public_repos}}', user.public_repos)
    .replace('{{followers}}', user.followers)
    .replace('{{following}}', user.following)
}

function clearForm() {
  nameInput.value = '';
}