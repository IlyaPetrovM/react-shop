function GoodsItem(props) {
  const { offer, name, description, price, full_background, 
    addToBasket = Function.prototype } = props;

  return (
    <div className='card'>
      <div className='card-image'>

        <img src={full_background} alt={name} />
      </div>
      <span className='card-title'>{name}</span>
      <div className='card-content'>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button className='btn' onClick={ () => {
          addToBasket({offer, name, price })
        } }>
          Купить
        </button>
        <span className='right' style={{ fontSize: '1.8rem' }}>{price} руб.</span>
      </div>
    </div>
  );
}
export default GoodsItem;



/*
  Structure of item API:
  {
      "id": "SID_Placeholder_243",
        "name": "Dynamite",
        "description": "",
        "type": "sparks_song",
        "rarity": "uncommon",
        "internalRarity": "uncommon",
        "price": 500,
        "priceNoDiscount": 500,
        "categories": "Panel 0",
        "priority": -1,
        "banner": "",
        "offer": "v2:/e08eef2c41533cac3f153175c91fd10a4d0eab25e83c2f4f977ab356911525aa",
        "releaseDate": "2024-07-04",
        "lastAppearance": "2024-08-26",
        "interest": 0,
        "giftAllowed": true,
        "buyAllowed": true,
        "image": "https://media.fortniteapi.io/images/54c98402c0a68e1360f82831d71fb856/transparent.png",
        "icon": "https://media.fortniteapi.io/images/54c98402c0a68e1360f82831d71fb856/transparent.png",
        "full_background": "https://media.fortniteapi.io/images/54c98402c0a68e1360f82831d71fb856/background_full.ru.png",
        "items": [
            "sid_placeholder_243"
        ],
        "otherItemsDetails": [],
        "videos": [],
        "customColors": {}
    }
 */
