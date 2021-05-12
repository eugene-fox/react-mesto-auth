import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function Card({ card, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `place-card__delete-button ${isOwn ? 'place-card__delete-button_visible.css' : 'place-card__delete-button_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = `place-card__like-button ${isLiked && 'place-card__like-button_active'}`;

  const handelClick = () => {
    onCardClick(card);
  }

  const handleLikeClick = () => {
    onCardLike(card);
  }

  const handleDeleteClick = () => {
    onCardDelete(card);
  }

  return (
    <li className="place-card">
      <button
        type="button"
        aria-label="Удалить карточку"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      />
      <img className="place-card__photo" src={card.link}
        alt={card.name} onClick={handelClick} />
      <div className="place-card__photo-description">
        <h2 className="place-card__photo-name">{card.name}</h2>
        <div className="place-card__like-section">
          <button
            type="button"
            aria-label="Поставить лайк"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          <span className="place-card__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}
