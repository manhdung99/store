import React from "react";
import "./detailPage.scss";
import Header from "../header/header";
import Social from "../body/social/social";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChevronRight,
  faMapMarkerAlt,
  faCaretRight,
  faShoppingCart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import {
  previewImage1,
  previewImage2,
  previewImage3,
  previewImage4,
} from "../../image/index";
import TextDetail from "./textDetail/textDetail";
import { connect } from "react-redux";



const DetailPage = ({addCart}) => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const inputVersionRef = useRef([]);
  const inputColorRef = useRef([]);
  const previewImages = [
    {
      url: previewImage1,
    },
    {
      url: previewImage2,
    },
    {
      url: previewImage3,
    },
    {
      url: previewImage4,
    },
  ];
  const [colorProduct,setColorProduct] = useState('')
  const [versionProduct,setVerSionProduct] = useState('')
  const promotions = [
    "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
    "Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
  ];
  const versions = [
    {
      id: 1,
      data: "128GB",
      price: "29990000",
    },
    {
      id: 2,
      data: "256GB",
      price: "32590000",
    },
    {
      id: 3,
      data: "512GB",
      price: "37790000",
    },
    {
      id: 4,
      data: "1TB",
      price: "42990000",
    },
  ];
  const [colors, setColor] = useState([
    {
      color: "Graphite",
      price: 29990000,
    },
    {
      color: "Silver",
      price: 29990000,
    },
    {
      color: "Gold",
      price: 31990000,
    },
    {
      color: "Sierra Blue",
      price: 30990000,
    },
  ]);
  const versionsColor = [
    [
      {
        color: "Graphite",
        price: 29990000,
      },
      {
        color: "Silver",
        price: 29990000,
      },
      {
        color: "Gold",
        price: 31990000,
      },
      {
        color: "Sierra Blue",
        price: 30990000,
      },
    ],
    [
      {
        color: "Graphite",
        price: 32590000,
      },
      {
        color: "Silver",
        price: 33990000,
      },
      {
        color: "Gold",
        price: 33990000,
      },
      {
        color: "Sierra Blue",
        price: 34990000,
      },
    ],
    [
      {
        color: "Graphite",
        price: 37790000,
      },
      {
        color: "Silver",
        price: 36990000,
      },
      {
        color: "Gold",
        price: 37990000,
      },
      {
        color: "Sierra Blue",
        price: 37990000,
      },
    ],
    [
      {
        color: "Graphite",
        price: 42990000,
      },
      {
        color: "Silver",
        price: 39990000,
      },
      {
        color: "Gold",
        price: 40990000,
      },
      {
        color: "Sierra Blue",
        price: 39990000,
      },
    ],
  ];
  const citys = [
    "Hà Nội",
    "Thành Phố HCM",
    "Đà Nẵng",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Quảng Nam",
    "Nghệ An",
    "Quảng Bình",
    "Quảng Trị",
  ];
  const stores = [
    "382 Nguyễn Văn Cừ, Hà Nội",
    "122 Thái Hà, Hà Nội",
    "126 Phố Huế, Hà Nội",
    "392 Cầu Giấy, Hà Nội",
    "28 Trần Phú, Hà Đông, Hà Nội",
    "348 Hồ Tùng Mậu, Cầu Diễn, Từ Liêm, Hà Nội",
    "102 Phố Xốm, Phú Lãm, Hà Đông, Hà Nội",
    "392 Trương Định, Hoàng Mai, Hà Nội",
    "368 Nguyễn Trãi, Thanh Xuân, Hà Nội",
    "12 Điện Biên Phủ, Hà Nội",
    "Số 20 Khu 7, Thị trấn Trạm Trôi, Huyện Hoài Đức, Hà Nội",
  ];
  const product = {
    id:10,
    productName:
      "Điện thoại di động Apple iPhone 13 Pro Max - 256GB - Chính hãng VN/A",
  };
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const handleUpdatePrice = (id) => {
    setColor(versionsColor[id - 1]);
    setCurrentPrice(versionsColor[id - 1][0].price);
  };
  const handleUpdateCurrentPrice = (price) =>{
    setCurrentPrice(price)
  }
  useEffect(() => {
    inputVersionRef.current[0].checked = true;
    inputColorRef.current[0].checked = true;
  }, []);
  useEffect(() =>{
    let versionNumber = 0;
    let colorNumber = 0;
    for(let i =0;i<inputColorRef.current.length;i++){
      if(inputColorRef.current[i].checked === true){
        setColorProduct(inputColorRef.current[i].nextSibling.innerText);  
        versionNumber =i+2;  
      }
    }
    for(let i =0;i<inputColorRef.current.length;i++){
      if(inputVersionRef.current[i].checked === true){
        setVerSionProduct(inputVersionRef.current[i].nextSibling.innerText);    
        colorNumber =i+2;
      }
    }
    product.id = versionNumber*7 + colorNumber*3;
  })
  
  const handleAddCart = () => {
    addCart({
      id: product.id,
      price: currentPrice > 0 ? currentPrice : versions[0].price,
      productName: product.productName,
      url: "http://localhost:3000" + previewImage1,
      promotion:promotions,
      color:colorProduct,
      memory : versionProduct,
      count:1
    });
  };
  return (
    <div className="detail-page">
      <Header />
      <Social />
      <ul className="heading-item-link">
        <Link className="item-element-link" to="/store/">
          <li className="item-element">
            <span className="home-icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            Trang Chủ
            <span className="right-icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </li>
        </Link>
        <Link className="item-element-link" to="">
          <li className="item-element">
            Điện Thoại
            <span className="right-icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </li>
        </Link>
        <Link className="item-element-link" to="">
          <li className="item-element">
            Iphone
            <span className="right-icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </li>
        </Link>
        <Link className="item-element-link" to="">
          <li className="item-element">{product.productName}</li>
        </Link>
      </ul>
      <p className="product-name">{product.productName}</p>
      <div className="product-detail-container">
        <div className="slide-container detail">
          <Slide>
            {previewImages.map((previewImage, index) => (
              <div className="each-slide" key={index}>
                <Link to={"/store/" + index}>
                  <img
                    style={{ width: 370, height: 370 }}
                    className="slide-img"
                    src={previewImage.url}
                    alt="logo"
                  />
                </Link>
              </div>
            ))}
          </Slide>
        </div>
        <div className="product-center">
          <p className="current-product-price">
            <strong>
              {currentPrice > 0
                ? formatNumber(currentPrice)
                : formatNumber(versions[0].price)}{" "}
              ₫
            </strong>
            <i> | Giá đã bao gồm 10% VAT</i>
          </p>
          <div className="product-option version">
            <label className="product-option-title">Lựa chọn phiên bản</label>
            <div className="options">
              {versions.map(
                (version, index) => (
                  <label
                    key={version.id}
                    className="option-item"
                    onClick={() => handleUpdatePrice(version.id)}
                  >
                    <div className="capacity-wrap">
                      <input
                        ref={(element) => {
                          inputVersionRef.current[index] = element;
                        }}
                        type="radio"
                        name="version-option"
                      />
                      <span className="capacity">{version.data}</span>
                    </div>
                    <span className="option-price">
                      {formatNumber(version.price)} đ
                    </span>
                  </label>
                ),
                []
              )}
            </div>
          </div>
          <div className="product-option color">
            <label className="product-option-title">Lựa chọn màu</label>
            <div className="options">
              {colors.map(
                (color, index) => (
                  <label
                    key={index}
                    className="option-item"
                    onClick={()=>handleUpdateCurrentPrice(color.price)}
                  >
                    <div className="capacity-wrap">
                      <input
                        ref={(element) => {
                          inputColorRef.current[index] = element;
                        }}
                        type="radio"
                        name="color-option"
                      />
                      <span className="capacity">{color.color}</span>
                    </div>
                    <span className="option-price">
                      {formatNumber(color.price)} đ
                    </span>
                  </label>
                ),
                []
              )}
            </div>
          </div>
          <div className="product-promotion">
            <p className="product-promotion-title">khuyến mãi</p>
            <ul className="product-promotion-list">
              {promotions.map((promotion, index) => (
                <li key={index} className="product-promotion-item">
                  <span className="bag">KM1</span>
                  <span className="content">{promotion} -</span>
                  <span className="detail">(Xem chi tiết)</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="product-action">
            <Link title="Mua ngay" to="" className="product-buy-now">
              <div className="product-buy-wrap">
                <strong>Mua ngay</strong>
                <p> Giao tận nhà (COD) hoặc Nhận tại cửa hàng</p>
              </div>
            </Link>
            <button
              onClick={() => handleAddCart()}
              title="Thêm vào giỏ hàng"
              to=""
              className="product-add-cart"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <FontAwesomeIcon icon={faPlus} className="plus" />
            </button>
          </div>
        </div>
        <div className="product-shop">
          <div className="warranty">
            <h4 className="warranty-title">Thông tin bảo hành</h4>
            <p className="warranty-content">
              Bảo hành chính hãng 12 tháng tại trung tâm bảo hành uỷ quyền Apple
              Việt Nam. Bao xài đổi lỗi - 1 đổi 1 trong 30 ngày đầu
            </p>
          </div>
          <div className="address">
            <p className="address-title"> Địa chỉ</p>
            <div className="city">
              <span className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              Tìm kiếm thành phố
              <div className="list-city">
                <ul className="list-city-item">
                  <li className="city-item">Xem tất cả</li>
                  {citys.map(
                    (city, index) => (
                      <li key={index} className="city-item">
                        {city}
                      </li>
                    ),
                    []
                  )}
                </ul>
              </div>
            </div>
            <div className="store">
              <ul className="store-list">
                {stores.map((store, index) => (
                  <li key={index} className="store-item">
                    <div className="address-store">
                      <FontAwesomeIcon icon={faCaretRight} />
                      <span>{store}</span>
                    </div>
                    <Link to="" className="store-link">
                      Bản đồ đường đi
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <TextDetail />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (cartItem) => dispatch({ type:"ADD_CART",payload : cartItem })
  };
};

export default connect(null, mapDispatchToProps)(DetailPage);
