class GalleryApi {
  static URL = 'https://jsonplaceholder.typicode.com/';

  static request(url = '', method = 'GET', body) {
    return fetch(GalleryApi.URL + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Canot execute request method', {cause: response});
      })
  }

  static getList() {
    return GalleryApi
      .request('albums')
      .catch(() => {
        throw new Error("Can not get list of album links!");
      });
  }

  static getPhotos(albumId) {
    return GalleryApi
      .request('photos?albumId=' + albumId)
      .catch(() => {
        throw new Error("Can not get album photos!!");
      });
  }
}