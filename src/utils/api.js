export default class Api {
  constructor(token, url, cohortId) {
    this._token = token;
    this._url = url;
    this._cohortId = cohortId;
  }

  //проверяем ответ сервера
  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //Получаем карточки с сервера
  getCards() {
    return fetch(`${this._url}${this._cohortId}/cards`, {
        headers: {
          authorization: this._token
        }
      })
      .then(this.checkResponse)
  }

  //Добавляем карточку на сервер
  addCard({
    name,
    link
  }) {
    return fetch(`${this._url}${this._cohortId}/cards`, {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          link
        })
      })
      .then(this.checkResponse)
  }

  //Метод удаления карточки
  deleteCard(cardId) {
    return fetch(`${this._url}${this._cohortId}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      })
      .then(this.checkResponse);
  }

  //Метод изменения статуса лайка
  changeLikeCardStatus(cardId, isLike) {
    return fetch(`${this._url}/${this._cohortId}/cards/likes/${cardId}`, {
        method: isLike ? 'PUT' : 'DELETE',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json',
        },
      })
      .then(this.checkResponse);
  }

  //Получаем данные пользователя с сервера
  getUserInfo() {
    return fetch(`${this._url}${this._cohortId}/users/me`, {
        headers: {
          authorization: this._token
        }
      })
      .then(this.checkResponse);
  }

  //Отправляем данные пользователя на сервер
  setUserInfo(userData) {
    return fetch(`${this._url}${this._cohortId}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(this.checkResponse)
  }

  //Обновляем аватар пользователя
  updataAvatar(avatar) {
    return fetch(`${this._url}${this._cohortId}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(avatar)
      })
      .then(this.checkResponse)
  }
}

export const api = new Api('233fa192-0365-43b1-9635-9ca57a07d48d', 'https://mesto.nomoreparties.co/v1/', 'cohort-20');
