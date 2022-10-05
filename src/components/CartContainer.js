import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { openModal } from '../folder/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();

  const { cartItems, total, amount } = useSelector((store) => store.cart)

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>ваша корзина</h2>
          <h4 className="empty-cart">в данный момент пуста</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2>ваша корзина</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>всего <span>${total.toFixed(2)}</span></h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>очистить корзину</button>
      </footer>
    </section>
  )
}

export default CartContainer