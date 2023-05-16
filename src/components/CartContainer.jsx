import React from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import './cartitem.css';
import { openModal } from '../features/modal/modalslice';


function CartContainer() {
  const dispatch = useDispatch();
  const {cartItems,total} = useSelector((state) => state.cart)
  return (
    <>
    <div className='containers'>
      <div className="main-heading">
        <h1 className="heading">Your Bag</h1>
    </div>
    <div className="parent">
      {cartItems.map((item) => {
    return <CartItem {...item} key={item.id} />
      })}
      </div>
    </div>
    <div className="bottomline"></div>
    <footer className="total-container">
      <div className="amount-total">
        <p className="total">Total</p>
        <p className="amount">{total.toFixed(2)} $</p>
      </div>
      <div className="clear-all">
        <button onClick={() => dispatch(openModal())} className="remove-all">Clear Cart</button>
      </div>
    </footer>
    </>
  )
}

export default CartContainer
