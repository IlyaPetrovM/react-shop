function BasketItem(props){
  const {
    offer: id, name, price, quantity,
    removeFromBasket = Function.prototype,
     setQuantity = Function.prototype,
  } = props;
  return (
    <li  className="collection-item">
      { name } x  { quantity }  = { price * quantity }
      <button onClick={()=> quantity > 1 ? setQuantity(id, quantity-1) : 1}> - </button>
      <button onClick={()=> setQuantity(id, quantity + 1)}> + </button>
      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete" >close</i>
      </span>
    </li>
  )
}
export {BasketItem};