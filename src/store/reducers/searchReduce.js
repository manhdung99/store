import {iphone11,iphone12,iphone12mini,iphone13promax,iphone13promax256 } from "../../image/index";

const initState = {
    searchItems: [
    ],
    items :[
            {
              url: iphone11,
              name: "Apple iPhone 11 - 64GB - Chính hãng VN/A",
              content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
              oldPrice: 19990000,
              newPrice: 13990000,
              promotion: [
                " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
              ],
            },
            {
                url: iphone12,
                name: "Apple iPhone 12 - 64GB - Chính hãng VN/A",
                content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                oldPrice: 21990000,
                newPrice: 14990000,
                promotion: [
                  " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                  " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
                ],
              },
              {
                url: iphone12mini,
                name: "Apple iPhone 12 mini - 64GB - Chính hãng VN/A",
                content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                price:13999000,
                promotion: [
                  " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                  " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
                ],
              },
              {
                url: iphone13promax,
                name: "Apple iPhone 13 ProMax - 128GB - Chính hãng VN/A",
                content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                oldPrice: 28990000,
                newPrice: 24990000,
                promotion: [
                  " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                  " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
                ],
              },
              {
                url: iphone13promax256,
                name: "Apple iPhone 13 ProMax 256G - 64GB - Chính hãng VN/A",
                content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                oldPrice: 32990000,
                newPrice: 28990000,
                promotion: [
                  " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                  " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
                ],
              },
              {
                url: iphone11,
                name: "Apple iPhone 11 - 64GB - Chính hãng VN/A",
                content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                price:13999000,
                promotion: [
                  " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                  " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
                ],
              },
              {
                  url: iphone12,
                  name: "Apple iPhone 12 - 64GB - Chính hãng VN/A",
                  content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                  oldPrice: 21990000,
                  newPrice: 14990000,
                  promotion: [
                    " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                    " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
                  ],
                },
                {
                  url: iphone12mini,
                  name: "Apple iPhone 12 mini - 64GB - Chính hãng VN/A",
                  content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                  price:11999000,
                  promotion: [
                    " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                    " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
                  ],
                },
                {
                  url: iphone13promax,
                  name: "Apple iPhone 13 ProMax - 128GB - Chính hãng VN/A",
                  content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                  oldPrice: 28990000,
                  newPrice: 24990000,
                  promotion: [
                    " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                    " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
                  ],
                },
                {
                  url: iphone13promax256,
                  name: "Apple iPhone 13 ProMax 256G - 64GB - Chính hãng VN/A",
                  content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                  oldPrice: 32990000,
                  newPrice: 28990000,
                  promotion: [
                    " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
                    " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
                  ],
                },
          ]
  };

  const searchReducer = (state = initState, action) => {
    switch (action.type) {
      case "SEARCH":
        let newData;
        if(action.payload === ''){
          newData = [];
        }else{
          newData = initState.items.map((item) =>{
            return item.name.includes(action.payload) ? item : null ;
          })
        }
          let newItems = [...newData];
                newItems = newItems.filter(newCartItem => newCartItem !== null)
        return {
          ...state,
          searchItems: newItems,
        }
      default:
        return state;
    }
  };

  export  {searchReducer};