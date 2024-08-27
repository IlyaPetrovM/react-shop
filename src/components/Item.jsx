function Item(props){
  const {id, image, name, price} = props.info;
  return(
    <div className="item">
      {name}
    </div>
  );
}

export default Item;