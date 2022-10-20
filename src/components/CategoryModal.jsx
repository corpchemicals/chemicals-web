import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/components/CategoryModal';

const CategoryModal = ({ openModal, setOpenModal, info }) => {
  if(!openModal) return null;

  const handleClose = () => {
    setOpenModal(false)
  }

  return ReactDOM.createPortal(
    <div className='CategoryModal'>
      <button onClick={handleClose}>
        <i className='CategoryModal__close'></i>
      </button>
      <article className='CategoryModal__content'>
        <h2>{info.name}</h2>
        <p>{info.description}</p>
      </article>
    </div>,
    document.getElementById('modal')
  );
}
 
export default CategoryModal;