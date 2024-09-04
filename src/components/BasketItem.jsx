import { useContext } from 'react'
import { ShopContext } from '../context';

function BasketItem(props){
  const {
    id, 
    name,
    price,
    quantity,
  } = props;

  const { removeFromBasket, setQuantity } = useContext(ShopContext);


  return (
    <li  className="collection-item">

      { name } 

      <i 
        className='material-icons basket-quantity'
        onClick={ ()=> quantity > 1 ? setQuantity(id, quantity-1) : 1 }
        > remove </i> 
      {' '}

      x{ quantity }

      <i 
        className='material-icons basket-quantity' 
        onClick={ ()=> setQuantity(id, quantity + 1) }
        > add </i> 
      {' '}


      = { price * quantity } руб.


      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete" >close</i>
      </span>
    </li>
  )
}
export {BasketItem};