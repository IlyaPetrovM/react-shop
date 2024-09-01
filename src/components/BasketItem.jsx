function BasketItem(props){
  const {
    offer: id, name, price, quantity,
    removeFromBasket = Function.prototype,
     setQuantity = Function.prototype,
  } = props;
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


      = { price * quantity }


      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete" >close</i>
      </span>
    </li>
  )
}
export {BasketItem};