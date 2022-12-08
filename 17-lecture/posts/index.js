const container = document.querySelector('#container')

getPosts()
  .then((posts) => renderPosts(posts))
  .catch((error) => {
    alert('Can not retrieve posts list')
  })


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

function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
}
