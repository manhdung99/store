/* eslint-disable react-hooks/exhaustive-deps */
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
import TextDetail from "./textDetail/textDetail";
import { connect } from "react-redux";



const DetailPage = ({addCart,detailItem}) => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const inputVersionRef = useRef([]);
  const inputColorRef = useRef([]);
  const [colorProduct,setColorProduct] = useState('')
  const [versionProduct,setVerSionProduct] = useState('')
  const [currentImage,setCurrentImage] = useState(0)
  const [colors, setColor] = useState(detailItem.versionsColor[0]);


  useEffect(()=>{
    setColor(detailItem.versionsColor[0])
    inputVersionRef.current[0].checked = true;
    inputColorRef.current[0].checked = true;
    setCurrentPrice(detailItem.versions[0].price)
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  },[detailItem])

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
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const handleUpdatePrice = (id) => {
    setColor(detailItem.versionsColor[id - 1]);
    setCurrentPrice(detailItem.versionsColor[id - 1][0].price);
    inputColorRef.current[0].checked = true;
    let colorNumber = 0;
    let versionNumber = 0;
    for(let i =0;i<inputVersionRef.current.length;i++){
      if(inputVersionRef.current[i].checked === true){
        setVerSionProduct(inputVersionRef.current[i].nextSibling.innerText);  
        versionNumber = i ;
      }
    }
    for(let i =0;i<inputColorRef.current.length;i++){
      if(inputColorRef.current[i].checked === true){
        setColorProduct(inputColorRef.current[i].nextSibling.innerText);  
        colorNumber = i;
        setCurrentImage(i)
      }
    }
    detailItem.id = (colorNumber+1)* 27 + (versionNumber +1)*13;
  };
  useEffect(() => {
    inputVersionRef.current[0].checked = true;
    inputColorRef.current[0].checked = true;
  }, []);

  const handleAddCart = () => {
    addCart({
      id: detailItem.id,
      price: currentPrice > 0 ? currentPrice : detailItem.versions[0].price,
      productName: detailItem.name,
      url: detailItem.previewImages[currentImage].url,
      promotion:detailItem.promotion,
      color:colorProduct === '' ?colors[0].color : colorProduct ,
      memory : versionProduct === '' ? detailItem.versions[0].data : versionProduct ,
      count:1
    });
  };

  const hanleUpdateColor = (price) =>{
    let colorNumber = 0;
    let versionNumber = 0;
    setCurrentPrice(price);
    for(let i =0;i<inputVersionRef.current.length;i++){
      if(inputVersionRef.current[i].checked === true){
        setVerSionProduct(inputVersionRef.current[i].nextSibling.innerText);  
        versionNumber = i ;
      }
    }
    for(let i =0;i<inputColorRef.current.length;i++){
      if(inputColorRef.current[i].checked === true){
        setColorProduct(inputColorRef.current[i].nextSibling.innerText);  
        colorNumber = i;
        setCurrentImage(i)
      }
    }
    detailItem.id = (colorNumber+1)* 27 + (versionNumber +1)*13;
  }
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
          <li className="item-element">{detailItem.name}</li>
        </Link>
      </ul>
      <p className="product-name">{detailItem.name}</p>
      <div className="product-detail-container">
        <div className="slide-container detail">
          <Slide>
            {detailItem.previewImages.map((previewImage, index) => (
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
                : formatNumber(detailItem.versions[0].price)}
              ₫
            </strong>
            <i> | Giá đã bao gồm 10% VAT</i>
          </p>
          <div className="product-option version">
            <label className="product-option-title">Lựa chọn phiên bản</label>
            <div className="options">
              {detailItem.versions.map(
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
                )
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
                    onClick={()=>hanleUpdateColor(color.price)}
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
              {detailItem.promotion.map((promotion, index) => (
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
                    ))}
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
const mapStateToProps = (state) => {
  return {
    detailItem: state.searchReducer.detailItem
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (cartItem) => dispatch({ type:"ADD_CART",payload : cartItem })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
