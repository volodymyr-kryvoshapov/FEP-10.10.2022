const PHOTOS_SELECTOR = ".photos";
const ALBUM_LINKS_SELECTOR = "#containerForAlbumLinks";
const ALBUM_LINK_SELECTOR = ".albumLink";
const FIRST_ALBUM_INDEX = 0;

const containerForAlbums = document.querySelector(ALBUM_LINKS_SELECTOR);
const containerForPhotos = document.querySelector(PHOTOS_SELECTOR);

containerForAlbums.addEventListener("click", onContainerForAlbumsClick);

init();


function onContainerForAlbumsClick(e) {
  const albumLink = e.target.closest(ALBUM_LINK_SELECTOR);
  let id = albumLink.dataset.id;

  if (id) {
    getAlbumPhotos(id);
  }
}

function init() {
  GalleryApi.getList()
    .then((albums) => {
      const albumId = albums[FIRST_ALBUM_INDEX].id;

      renderAlbumLinks(albums)
      getAlbumPhotos(albumId);
    })
    .catch(showError);
}

function renderAlbumLinks(albums) {
  const html = albums.map(generateAlbumLinkHTML).join('');

  containerForAlbums.innerHTML = html;
}

function generateAlbumLinkHTML(album) {
  return `
    <div class="albumLink" data-id="${album.id}">
        <a href="#" id="link">${album.title}</a>
    </div>
  `;
}

function getAlbumPhotos(albumId) {
  GalleryApi.getPhotos(albumId)
    .then(renderPhotos)
    .catch(showError);
}

function renderPhotos(photos) {
  const html = photos.map(generatePhotoHTML).join('');

  containerForPhotos.innerHTML = html;
}

function generatePhotoHTML(photo) {
  return `<img src=${photo.thumbnailUrl}/>`;
}

function showError(error) {
  alert(error.message);
}