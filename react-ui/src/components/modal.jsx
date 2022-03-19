import './modal.css';

const Modal = ({ handleClose, modalText, show }) => {
  const displayModal = show ? "modal display-block" : "modal display-none";

  return (
    <div className={displayModal}>
      <section className="modal-main">
        {modalText} <br />
        <button type="button" onClick={handleClose}>
          New Game
        </button>
      </section>
    </div>
  );
};

export default Modal;