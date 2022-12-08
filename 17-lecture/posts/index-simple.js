const getPostsBtn = document.querySelector('#getPosts')
const container = document.querySelector('#container')

getPostsBtn.addEventListener('click', onGetPostsBtnClick)

function onGetPostsBtnClick() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((posts) => renderPosts(posts))
    .catch(() => {
      alert('Can not retrieve posts list')
    })
}

function renderPosts(posts) {
  container.innerHTML = posts.map(generatePostHtml).join('');
}

function generatePostHtml(post) {
  return `
    <div>
      <h4>${post.title}</h4>
      <div>${post.body}</div>
    </div>
  `;
}
