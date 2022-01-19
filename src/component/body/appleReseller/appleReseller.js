/* eslint-disable no-unused-vars */
import React from "react";
import "./appleReseller.scss";
import { Link } from "react-router-dom";
import { apple, iphone11, giaSoc,iphone12,iphone12mini,iphone13promax,iphone13promax256 } from "../../../image/index";
import { useState } from "react";
import { connect } from "react-redux";

 const AppleReseller = ({appleItems,moveToDetailPage}) => {
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const handleClickItem = (item) =>{
    moveToDetailPage(item);
  }

  return (
    <div className="home-product">
      <div className="home-product-header">
        <Link className="home-product-link" to="">
          Apple Authorised reseller
        </Link>
      </div>
      <div className="home-product-body">
        <div className="product-list">
        {appleItems.map((appleProduct,index)=>(
            <div onClick = {() => handleClickItem(appleProduct)} className="product-item" key={index}>
                <Link to= {"/store/product/" + index} >
            <img src={appleProduct.url} className="product-item-img" alt="" />
                </Link>
            <Link to={"/store/product/" + index} className="product-item-link">
              <p className="product-item-name">
               {appleProduct.name}
              </p>
            </Link>
              {appleProduct?.price ? 
            <div className="product-item-price">
                  <p className="product-item-new-price">{formatNumber(appleProduct.price)} đ</p>
            </div>
            :
            <div className="product-item-price">
            <p className="product-item-new-price">{formatNumber(appleProduct.newPrice)} đ</p>
              <p className="product-item-old-price">{formatNumber(appleProduct.oldPrice)} đ</p>
              </div>
            }
            <div className="product-item-note">
              <span className="bag">KM</span>
              <label
                title={appleProduct.content}
                className="note-content"
              >
                {appleProduct.content.substring(0,35)}...
              </label>
              <strong className="text-orange">và {appleProduct.promotion.length -1} Km khác</strong>
            </div>
            <div className="sticker">
              <span className="apple">
                <img src={apple} alt="" />
              </span>
              { appleProduct.oldPrice - appleProduct.newPrice > 5000000 &&
              <span className="shock-price">
                <img src={giaSoc} alt="" />
              </span>
              }
            </div>
            {
              appleProduct?.oldPrice && appleProduct.newPrice && <span className="sales"> Giảm {formatNumber(appleProduct.oldPrice - appleProduct.newPrice)} ₫</span>
            }
            
          </div>
        ))
          }
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps  = (dispatch) =>{
  return {
      moveToDetailPage : (value) => dispatch({type:'MOVE_TO_ITEM',payload:value}),
  }
};

const mapStateToProps = (state) => {
  return {
    appleItems: state.searchReducer.items
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AppleReseller);
