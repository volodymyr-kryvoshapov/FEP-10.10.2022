class StickersApi {
  static URL = 'https://62054479161670001741b708.mockapi.io/api/stickers';

  static request(uri = '', method = 'GET', data) {
    return fetch(`${this.URL}${uri}`, {
      method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: data ? JSON.stringify(data) : undefined,
    })
      .then((res) => res.json());
  }

  static getList() {
    return this.request();
  }

  static getOne(id) {
    return this.request(`/${id}`);
  }

  static create(data) {
    return this.request('', 'POST', data);
  }

  static update(id, data) {
    return this.request(`/${id}`, 'PUT', data);
  }

  static delete(id) {
    return this.request(`/${id}`, 'DELETE');
  }
}
