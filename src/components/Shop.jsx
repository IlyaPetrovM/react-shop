import { useEffect, useContext } from "react";

import { ShopContext } from "../context";

import { API_URL, API_KEY } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop(props){
  const {
    goods,
    order, 
    loading, 
    isBasketShow,
    alertName, 
    setGoods
  } = useContext(ShopContext);
 
  useEffect(function getGoods(){
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      },
    }).then(resp => resp.json())
    .then(data => {
      console.log(data.shop); // alarm! use API v1 of fortnight
      setGoods(data.shop);
    })
  }, [])

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      { loading ? <Preloader /> : <GoodsList /> }
      { isBasketShow && <BasketList /> }
      { alertName && <Alert/> }
    </main>
  );
}

export default Shop;