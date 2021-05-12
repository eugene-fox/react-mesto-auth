import { PopupWithForm } from './PopupWithForm';
import { useRef, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isDataSending }) {

  const avatarRef = useRef();

  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значениe во внешний обработчик
    onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      buttonText={isDataSending ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__inputs">
        <input
          type="url"
          name="avatar-url"
          className="popup__input popup__input_type_avatar-url"
          autoComplete="off"
          placeholder="url"
          required minLength="2"
          maxLength=""
          ref={avatarRef}
        />
        <span className="popup__error-message" id="avatar-url-error" />
      </div>
    </PopupWithForm>
  );
}
