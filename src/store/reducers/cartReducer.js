const initState = {
  cartItems: [
    {
      id: 1,
      productName: "Apple iPhone 11 - 64GB - Chính hãng VN/A",
      newPrice: 13770000,
      oldPrice: 19700000,
      count: 1,
      promotion: [
        "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
        "Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
      ],
      color: "Black",
      memory: "64GB",
      url: "http://localhost:3000/store/static/media/preview-image-1.e5eed755.png",
    },
  ],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export { cartReducer };
