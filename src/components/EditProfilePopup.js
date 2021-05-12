import { useState, useEffect, useContext } from 'react';
import { PopupWithForm } from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function EditProfilePopup({ isOpen, onClose, onUpdateUser, isDataSending }) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen])

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      buttonText={isDataSending ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__inputs">

        <input
          type="text"
          name="name-of-user"
          className="popup__input popup__input_type_name"
          autoComplete="off"
          required
          minLength="2"
          maxLength="40"
          value={name === undefined ? "" : name}
          onChange={handleNameChange}
        />

        <span className="popup__error-message" id="name-of-user-error" />

        <input
          type="text"
          name="description"
          className="popup__input popup__input_type_description"
          autoComplete="off"
          required
          minLength="2"
          maxLength="200"
          value={description === undefined ? "" : description}
          onChange={handleDescriptionChange}
        />

        <span className="popup__error-message" id="description-error"></span>
      </div>
    </PopupWithForm>
  );
}
