import { useContext } from "react";
import { BasketItem } from "./BasketItem";
import { ShopContext } from "../context";

function BasketList(props){
  const {order = [], handleBasketShow = Function.prototype} = useContext(ShopContext)

  const totalPrice = order.reduce((sum, el)=>{
    return sum + el.price * el.quantity;
  }, 0);


  return(
    <ul className="collection basket-list ">
      <li className="collection-item active green darken-1">Корзина</li>
      {
        order.length ? order.map(item => (
          <BasketItem 
            key={ item.id } 
            { ...item } 
          />
        )) : <li  className="collection-item "> Корзина пуста </li>
      }
      
      <li className="collection-item"><b>Общая стоимость: {totalPrice} руб.</b></li>
      <li className="collection-item"><button className="btn green darken-1">Оформить</button> </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
  )
}
export {BasketList};