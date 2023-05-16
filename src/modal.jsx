import React from 'react';
import { clearCart } from './features/cart/cartslice';
import { openModal } from './features/modal/modalslice';
import { closeModal } from './features/modal/modalslice';
import { useDispatch } from 'react-redux';

import './modal.css';
function Modal() {
  const dispatch = useDispatch();
    return (
      <div className="modal-container">
        <div className="popup">
          <div className="popup-content">
            <h4 className="pop-title">Remove All items from your shopping Cart?</h4>
          </div>
          <div className="pop-buttons">
            <button onClick={() => dispatch(closeModal())} className="cancel">Cancel</button>
            <button onClick={() => {
              dispatch(clearCart())
              dispatch(closeModal())
            }} className="confirm">Confirm</button>
          </div>
        </div>
      </div>
    );
  }

export default Modal
