
export function reducer(state, { type, payload }){
  switch (type){
    case 'SET_GOODS':
      return{
        ...state,
        goods: payload  || [],
        isLoading: false
      }
    case 'ADD_TO_BASKET': {
      console.log(payload)
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
    
      let newOrder = null;
      if (itemIndex < 0){
        const newItem = {
          ...payload,
          quantity: 1,
        }
        newOrder = [...state.order, newItem]
      }else{
        newOrder = state.order.map((orderItem, index)=>{
          if(index === itemIndex){
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1
            }
          }else{
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.name
      }
    }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter(el => el.id !== payload.id)
      }
    case 'CLOSE_ALERT':
      return { 
        ...state,
        alertName: '',
      }
    case 'SET_QUANTITY': {
      const index = state.order.findIndex(item => item.id === payload.id)
      const newOrder = [...state.order];
      newOrder[index].quantity = payload.newQuantity;
      return {
        ...state,
        order: newOrder
      }
    }
    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    
    default:
      return state;
  }
}