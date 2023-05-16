import React from 'react';
import './cartitem.css';
import { useDispatch } from 'react-redux';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { increaseItem, removeItem, decreaseItem} from '../features/cart/cartslice';

function CartItem({img ,title, price,id,quantity}) {
  const dispatch = useDispatch();
  return (
    <>
    <div>
        <div className="container">
                <img className='image' src={img} alt="" />
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="price">{price}$</p>
                <button onClick={() => dispatch(removeItem(id))} className="remove">remove</button>
            </div>
            <div className="quantity-container">
          <ArrowDropUpIcon onClick={() => dispatch(increaseItem(id))}/>
          <p className="quantity">{quantity}</p>
          <ArrowDropDownIcon  onClick={() => {
            if(quantity === 1){
              return dispatch(removeItem(id));
            }
            dispatch(decreaseItem(id))
          }}/>
        </div>
        </div>
    </div>
    </>
  )
}

export default CartItem;
