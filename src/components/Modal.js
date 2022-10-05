import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../folder/cart/cartSlice'
import { closeModal } from '../folder/modal/modalSlice'


const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
      <div className="modal">
        <h4>удалить все товары из вашей корзины покупок?</h4>
        <div className="btn-container">
          <button type='button' className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            да
          </button>
          <button type='button' className='btn clear-btn'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            нет
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal