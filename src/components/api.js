
export class Api { 
   
  #checkResponse (response) {
    // if(!response.ok) {
      console.log(response);
      return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`)
      // return Promise.reject(`Ошибка: ${response.status}`);
    }
    // return response.json()
  

  constructor(urlConfig) {
    this._url = urlConfig.url;
    this._headers = urlConfig.headers; 
  }

  
  //Запрос о пользователе
   getUser () {
    return fetch(`${this._url}/users/me`, { 
      headers: this._headers })
    .then(this.#checkResponse)
  }
  
  //Запрос для изменение профилья 
  editProfile (editData) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(editData),})
      .then(this.#checkResponse);
  };
  
  //Запрос о карточках
  getCards () {
    return fetch(`${this._url}/cards`, { 
      headers: this._headers })
    .then(this.#checkResponse)
  };
  
  //Запрос на создания карточек
  addCards (inputData) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(inputData),})
      .then(this.#checkResponse)
  };
  
  //Запрос для изменение аватара
  editAvatar (editData) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(editData),})
      .then(this.#checkResponse)
  };
  
  deleteCards (cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,})
      .then(this.#checkResponse)
  };
  
  addLikes (cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,})
      .then(this.#checkResponse)
  };
  
  removeLikes (cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,})
      .then(this.#checkResponse)
  };
}

