import { useState, useEffect } from "react";

import { API_URL, API_KEY } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop(props){
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('')

  const setQuantity = (itemId, newQuantity) => {
    const index = order.findIndex(item => item.offer === itemId)
    const newOrder = [...order];
    newOrder[index].quantity = newQuantity;
    setOrder(newOrder)
  }

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.offer !== itemId) // alarm! use offer field instead of id
    setOrder(newOrder);
  }
  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }
  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.offer === item.offer)
    
    if (itemIndex < 0){
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem])
    }else{
      const newOrder = order.map((orderItem, index)=>{
        if(index === itemIndex){
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        }else{
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };
  
  const closeAlert = () => {
    setAlertName('');
  }


  useEffect(function getGoods(){
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      },
    }).then(resp => resp.json())
    .then(data => {
      // console.log(data.featured); // alarm! use API v1 of fortnight
      data.featured && setGoods(data.featured);
      setLoading(false);
    })
  }, [])

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          setQuantity={setQuantity}
        />
      )}
      { 
        alertName && <Alert name={ alertName } closeAlert = { closeAlert }/> 
      }
    </main>
  );
}

export default Shop;