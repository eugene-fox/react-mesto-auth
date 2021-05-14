import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { EditProfilePopup } from './EditProfilePopup';
import { EditAvatarPopup } from './EditAvatarPopup';
import { AddPlacePopup } from './AddPlacePopup';
import { ImagePopup } from './ImagePopup';
import { Login } from './Login';
import { Register } from './Register';
import { ProtectedRoute } from './ProtectedRoute';
import { InfoTooltip } from './InfoTooltip';

import { api } from '../utils/api';
import * as authApi from '../utils/authApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [toolTipData, setToolTipData] = useState({
    isOpen: false,
    icon: '',
    text: ''
  });

  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardsLoading, setIsCardsLoading] = useState(false);
  const [isDataSending, setIsDataSending] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const history = useHistory();

  //Проверяем, есть в локальном хранилище токен
  // const tokenCheck = () => {
  //   const jwt = localStorage.getItem('jwt');
  //   console.log(jwt);
  //   if (!jwt) {
  //     console.log('Токен не найден');
  //     return;
  //   }
  // }

  // useEffect(() => {
  //   tokenCheck();
  // }, []);

  const onRegister = (data) => {
    return authApi
      .register(data)
      .then((res) => {
        console.log(res);
        history.push('/sign-in');
        setToolTipData({
          isOpen: true,
          icon: 'check',
          text: 'Вы успешно зарегистрировались!'
        })
      })
  };

  const onLogin = ({ email, password }) => {
    return authApi
      .authorize({ email, password })
      .then((res) => {
        setIsLoggedIn(true);
        setEmail(email);
        history.push('/');
        console.log(res);
        console.log(isLoggedIn, email);
      })
  };

  const onLogout = () => {
setIsLoggedIn(false);
history.push('/sign-in');
  }

  //Стейт данных текущего пользователя
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (isLoggedIn) {
      setIsCardsLoading(true);
      Promise.all([api.getUserInfo(), api.getCards()])
        .then(([userData, cardData]) => {
          setCurrentUser(userData);
          setCards(cardData);
        }).catch(err => console.log(err)).finally(() => {
          setIsCardsLoading(false);
        });
    }
  }, [isLoggedIn]);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setToolTipData({
      isOpen: false,
      icon: '',
      text: ''
    });
    console.log(toolTipData);
    setSelectedCard(null);
  }

  const handleUpdateUser = (userInfo) => {
    setIsDataSending(true);
    api.setUserInfo(userInfo).then((newUserInfo) => {
      setCurrentUser(newUserInfo);
      closeAllPopups();
    }).catch(err => console.log(err)).finally(() => {
      setIsDataSending(false);
    });
  }

  const handleUpdateAvatar = (newAvatarUrl) => {
    setIsDataSending(true);
    api.updataAvatar({ avatar: newAvatarUrl }).then((data) => {
      setCurrentUser(data);
      console.log(currentUser);
      closeAllPopups();
    }).catch(err => console.log(err)).finally(() => {
      setIsDataSending(false);
    });
  }

  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(
      () => {
        setCards((state) => {
          return state.filter((c) => c._id !== card._id);
        });
      }
    ).catch(err => console.log(err));
  }

  const handleAddPlaceSubmit = (newCard) => {
    setIsDataSending(true);
    api.addCard(newCard).then((addedNewCard) => {
      setCards([addedNewCard, ...cards])
    }).then(() => {
      closeAllPopups();
    }).catch(err => console.log(err)).finally(() => {
      setIsDataSending(false);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <div className="page__content">
            <Header
              email={email}
              onLogout={onLogout}
            />

            <Switch>
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                path="/" exact
              >
                <Main
                  onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  isCardsLoading={isCardsLoading}
                />

                <EditAvatarPopup
                  isOpen={isEditAvatarPopupOpen}
                  onClose={closeAllPopups}
                  onUpdateAvatar={handleUpdateAvatar}
                  isDataSending={isDataSending}
                />

                <EditProfilePopup
                  isOpen={isEditProfilePopupOpen}
                  onClose={closeAllPopups}
                  onUpdateUser={handleUpdateUser}
                  isDataSending={isDataSending}
                />

                <AddPlacePopup
                  isOpen={isAddPlacePopupOpen}
                  onClose={closeAllPopups}
                  onAddPlace={handleAddPlaceSubmit}
                  isDataSending={isDataSending}
                />

                <PopupWithForm
                  name="delete-confirm"
                  title="Вы уверены?"
                  buttonText="Да"
                  onClose={closeAllPopups}
                />

                <ImagePopup
                  card={selectedCard}
                  onClose={closeAllPopups}
                />
              </ProtectedRoute>

              <Route path="/sign-up">
                <Register
                  onRegister={onRegister}
                />
                <InfoTooltip
                  data={toolTipData}
                  onClose={closeAllPopups}
                />
              </Route>

              <Route path="/sign-in">
                <Login
                  onLogin={onLogin}
                />
                <InfoTooltip
                  onClose={closeAllPopups}
                  data={toolTipData}
                />
              </Route>

            </Switch>

            <Footer />
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
