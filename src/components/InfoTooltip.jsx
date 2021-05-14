import crossIcon from '../images/CrossIcon.svg';
import checkIcon from '../images/CheckIcon.svg';

const statusIcons = {
  cross: crossIcon,
  check: checkIcon
};

export function InfoTooltip({ onClose, data }) {
  return (
    <section className={`popup popup_type_info-tool-tip ${data.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <div className="popup__tool-tip-wrapper">
          <img className="popup__tool-tip-icon" src={statusIcons[data.icon]} alt={`${data.icon}`} />
          <p className="popup__info-text">{data.text}</p>
          <button type="button" aria-label="Закрыть окно" className="popup__close-button" onClick={onClose} />
        </div>
      </div>
    </section>
  );
}
