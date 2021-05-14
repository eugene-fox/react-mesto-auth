import CrossIcon from '../images/CrossIcon.svg';
import CheckIcon from '../images/CheckIcon.svg';

export function InfoTooltip({ onClose, data }) {
  return (
    <section className={`popup popup_type_info-tool-tip ${data.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <div className="popup__tool-tip-wrapper">
          <img className="popup__tool-tip-icon" src={CheckIcon} alt="dome" />
          <p className="popup__info-text">{data.text}</p>
          <button type="button" aria-label="Закрыть окно" className="popup__close-button" onClick={onClose} />
        </div>
      </div>
    </section>
  );
}
