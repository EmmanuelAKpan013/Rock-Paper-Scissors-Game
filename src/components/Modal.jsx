import closeIcon from '../images/icon-close.svg';
import ruleImage from '../images/image-rules.svg';

function Modal({ setOpenModal }) {
  return (
    <div className="modalContainer">
      <div className="header-box">
        <div className="modalRule">RULES</div>
        <div className="closeBtn">
          <img
            src={closeIcon}
            alt="close-icon"
            onClick={() => setOpenModal(false)}
          />
        </div>
      </div>
      <div className="modalBody">
        <img src={ruleImage} alt="" />
      </div>
    </div>
  );
}

export default Modal;
