export function ImagePopup({ card, onClose }) {

  return (
    <section className={`popup ${card && "popup_opened"}`} id="fullSizeImage">
      <div className="popup__image-container">
        <figure className="popup__image-group">
          <img className="popup__image" src={card != null ? card.link : undefined} alt={card?.name} />
          <figcaption className="popup__image-title">{card?.name}</figcaption>
        </figure>
        <button type="button" aria-label="Закрыть окно" className="popup__close-button" onClick={onClose}></button>
      </div>
    </section>
  );
}
