import { useState, useEffect } from "react";

import { API_URL, API_KEY } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import { BasketList } from "./BasketList";

function Shop(props){
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false)

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
      setOrder(newOrder)
    }
  };
  
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
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
      {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
      {
        isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} />
      }
    </main>
  );
}

export default Shop;