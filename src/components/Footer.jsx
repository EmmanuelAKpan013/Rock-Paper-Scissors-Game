import { useState } from 'react';
import Modal from './Modal';

function Footer() {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a id="name" href="#">
            Emmanuel Akpan
          </a>
          .
        </div>
        <button className="rules" onClick={toggleModal}>
          RULES
        </button>
      </footer>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : null}
    </>
  );
}

export default Footer;
