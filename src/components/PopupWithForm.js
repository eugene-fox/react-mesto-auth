import React from 'react';

export function PopupWithForm({ name, title, buttonText, children, isOpen, onClose, onSubmit }) {

  //TODO: Доделать закрытие по Esc и оверлею

  return (
    <section className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_profile">
        <form name={name} noValidate onSubmit={onSubmit}>
          <h3 className="popup__title">{title}</h3>
          {children}
          <button type="submit" className="popup__save-button popup__save-button_profile">{buttonText}</button>
        </form>
        <button type="button" aria-label="Закрыть окно" className="popup__close-button" onClick={onClose} />
      </div>
    </section>
  );
}
