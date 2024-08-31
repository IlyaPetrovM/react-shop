function BasketItem(props){
  const {offer, name, price, quantity} = props;
  return (
    <a href="#!" className="collection-item">
      { name } x{ quantity } = { price }
      <span className='secondary-content'>
        <i className="material-icons basket-delete">close</i>
      </span>
    </a>
  )
}
export {BasketItem};