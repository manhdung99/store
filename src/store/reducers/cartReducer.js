const initState = {
  cartItems: [
  
  ],
  isLogin: localStorage.getItem('isLogin') === 'false' ? false : true,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      }
    case "LIST_CART":
      return {
        ...state,
      };
    case "UPDATE_CART":
      let newCartItems = [...state.cartItems];
      let objIndex = newCartItems.findIndex(
        (obj) => obj.id === action.payload.id
      );
      newCartItems[objIndex] = action.payload;
      return {
        ...state,
        cartItems: [...newCartItems],
      };
      case "ADD_CART":
        {
        let newCartItems = [...state.cartItems];
        let objIndex = newCartItems.findIndex(
          (obj) => obj.id === action.payload.id
        );
        if(objIndex >0 ){
          newCartItems[objIndex] = {...newCartItems[objIndex],count : newCartItems[objIndex].count +1 };
        }else{
          newCartItems = [...state.cartItems, action.payload];
        }
        return {
          ...state,
          cartItems: [...newCartItems],
        }
    }
    case "DELETE_CART":
      {
       let newCartItems = [...state.cartItems];
       newCartItems = newCartItems.filter(newCartItem => newCartItem.id !== action.payload)
      return {
        ...state,
        cartItems: [...newCartItems],
      }};
    default:
      return state;
  }
};

export { cartReducer };
