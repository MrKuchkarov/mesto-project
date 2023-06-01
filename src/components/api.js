const urlConfig = {
  url: "https://nomoreparties.co/v1/plus-cohort-25",
  headers: {
    authorization: "294fa835-21a0-447a-ba41-ef90dc4b17f8",
    "Content-Type": "application/json",
  }
}

function checkResponse (response) {
  if(!response.ok) {
    return Promise.reject(response.status)
  }
  return response.json()
}

//Запрос о пользователе
export function getUser () {
  return fetch(`${urlConfig.url}/users/me`, { 
    headers: urlConfig.headers })
  .then(checkResponse)
}

//Запрос для изменение профилья 
export function editProfile (editData) {
  return fetch(`${urlConfig.url}/users/me`, {
    method: "PATCH",
    headers: urlConfig.headers,
    body: JSON.stringify(editData),
  }).then(checkResponse);
};

//Запрос о карточках
export function getCards () {
  return fetch(`${urlConfig.url}/cards`, { 
    headers: urlConfig.headers })
  .then(checkResponse)
}

//Запрос для изменение аватара
export function editAvatar (editData) {
  return fetch(`${urlConfig.url}/users/me/avatar`, {
    method: "PATCH",
    headers: urlConfig.headers,
    body: JSON.stringify(editData),
  }).then(checkResponse)
}

