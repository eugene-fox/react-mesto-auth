const BASE_URL = 'https://auth.nomoreparties.co';

//Проверка ответа сервера
const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(new Error(`Ошибка ${res.status}: ${res.statusText}`));
};

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => checkResponse(res));
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => checkResponse(res));
};

//Запрос для проверки валидности токена и получения email для вставки в шапку сайта
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        ...headers,
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => checkResponse(res));
};
