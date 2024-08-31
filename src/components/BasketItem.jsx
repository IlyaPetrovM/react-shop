function BasketItem(props){
  const {offer, name, price, quantity,
    removeFromBasket = Function.prototype
  } = props;
  return (
    <li  className="collection-item">
      { name } x{ quantity } = { price * quantity }
      <span className='secondary-content' onClick={() => removeFromBasket(offer)}>
        <i className="material-icons basket-delete" >close</i>
      </span>
    </li>
  )
}
export {BasketItem};