import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCheckCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import {useEffect,useState} from 'react'
import { faCheckCircle as faCheck } from "@fortawesome/fontawesome-free-regular";
import "./listCart.scss";
import { connect } from "react-redux";
import {useHistory} from "react-router-dom";
import Header from "../header/header"

const ListCart = ({cartItems,updateCart,deleteCart}) => {
    const [totalPrice,setTotalPrice] = useState(0);
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      };
      const history = useHistory();
    useEffect(()=>{
        
        const totalPrice = (accumulator,curentValue) =>{
            // console.log(accumulator,curentValue);
             return curentValue?.price ? accumulator + curentValue.price * curentValue.count  : accumulator + curentValue.newPrice *curentValue.count ;
         }
         let total = cartItems.reduce(totalPrice,0);
         setTotalPrice(total)
    },[cartItems])
    

  return (
      <div className="cart">
        <Header />
      <div onClick={() => history.goBack()} className="back">
        <FontAwesomeIcon icon={faChevronLeft} />
        Quay lại
      </div>
      <div className="cart-container">
        <div className="cart-info">
          <div className="cart-icon-wrap">
            <span className="cart-icon">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <p>Giỏ hàng</p>
          </div>
          <div className="cart-list">
              {cartItems.length >0 && cartItems.map((cart)=>(
                  <div key={cart.id} className="cart-item">
                  <span onClick={()=> deleteCart(cart.id)} className="delete-item">
                    <FontAwesomeIcon icon={faMinusCircle}  />
                  </span>
                  <div className="cart-item-img-wrap">
                    <img className="cart-item-img" src={cart.url} alt="" />
                    <p className="cart-item-name">
                    {cart.productName}
                    </p>
                    {
                        cart?.price ?   
                        <div className="cart-item-price">
                      <p className="cart-item-new-price">{formatNumber(cart.price)} ₫</p>
                    </div>
                    :
                    <div className="cart-item-price">
                      <p className="cart-item-new-price">{formatNumber(cart.newPrice)} ₫</p>
                      <p className="cart-item-old-price">{formatNumber(cart.oldPrice)} ₫</p>
                    </div>
                    }
                    <div className="cart-item-count">
                      <p>Số lượng</p>
                      <span
                      onClick={()=>updateCart({...cart,count:cart.count-1})}
                      >-</span>
                      <span>{cart.count}</span>
                      <span
                      onClick={()=>updateCart({...cart,count:cart.count+1})}
                      >+</span>
                    </div>
                  </div>
                  <div className="cart-info">
                    <div className="cart-item-promotion-wrap">
                      <ul className="cart-item-promotion-list">
                          {cart.promotion.map((promotion,index)=>(
                              <li key={index} className="cart-item-promotion">
                              <span className="bag">KM{index+1}</span>
                              <div className="content">
                              {promotion}
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="cart-option-list">
                      <div className="cart-option-item">
                        <strong>Phiên bản</strong>
                        <label>
                          <FontAwesomeIcon icon={faCheckCircle} />
                          {cart.memory}
                        </label>
                      </div>
                      <div className="cart-option-item">
                        <strong>Màu sắc</strong>
                        <label>
                          <FontAwesomeIcon icon={faCheckCircle} />
                          {cart.color}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-total">
              <p>Tổng giá trị : {formatNumber(totalPrice)} ₫</p>
              <p>Giảm giá : 0 ₫</p>
              <p>Tổng thanh toán : <span className="curent-pay">{formatNumber(totalPrice)} ₫</span></p>
          </div>
        </div>
        <div className="cart-form">
          <p className="form-title">Thông tin đặt hàng</p>
          <div className="form-input-wrap l-12">
            <input className="form-input" placeholder="Họ và tên" />
          </div>
          <div className="form-input-wrap l-12">
            <input className="form-input " placeholder="Số điện thoại" />
          </div>
          <div className=" row l-12">
            <div className="form-input-wrap col l-6">
              <select className="form-input ">
                <option value="volvo">Tỉnh/Thành Phố</option>
              </select>
            </div>
            <div className="form-input-wrap l-6">
              <select className="form-input ">
                <option value="audi">Quận/Huyện</option>{" "}
              </select>
            </div>
          </div>
          <div className="form-input-wrap l-12">
            <input className="form-input " placeholder="Địa chỉ nhận hàng" />
          </div>
          <div className="form-input-wrap l-12">
            <input className="form-input" placeholder="Email" />
          </div>
          <div className="form-input-wrap l-12">
            <input className="form-input " placeholder="Ghi chú" />
          </div>
          <button className="submit-form">Đặt hàng</button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
      cartItems: state.cartReducer.cartItems
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      getListCart: () => dispatch({ type: "ADD_CART" }),
      updateCart: (cartItem) => dispatch({ type: "UPDATE_CART",payload : cartItem}),
      deleteCart: (id) => dispatch({ type: "DELETE_CART",payload : id}),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ListCart);
