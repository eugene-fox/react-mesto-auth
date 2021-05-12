import React, { useEffect, useState } from 'react';

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { EditProfilePopup } from './EditProfilePopup';
import { EditAvatarPopup } from './EditAvatarPopup';
import { AddPlacePopup } from './AddPlacePopup';
import { ImagePopup } from './ImagePopup';

import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardsLoading, setIsCardsLoading] = useState(false);
  const [isDataSending, setIsDataSending] = useState(false);

  //Стейт данных текущего пользователя
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setIsCardsLoading(true);
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardData]) => {
        setCurrentUser(userData);
        setCards(cardData);
      }).catch(err => console.log(err)).finally(() => {
        setIsCardsLoading(false);
      });
  }, []);

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
            <Header />

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

            <Footer />

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

            <PopupWithForm name="delete-confirm" title="Вы уверены?" buttonText="Да" onClose={closeAllPopups} />

            <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
            />

          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
