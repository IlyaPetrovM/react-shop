import { useState, useEffect } from "react";

import { API_URL, API_KEY } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";


function Shop(props){
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);


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
  })

  return (
    <main className="container content">
      {loading ? <Preloader /> : <GoodsList goods={goods}/>}
    </main>
  );
}

export default Shop;