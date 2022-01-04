import React from "react";
import { useState,useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {NavLink } from "react-router-dom";
import {saleImage1,iphone12mini,iphone13promax,saleImage4,iphone13,iphone13promax256} from '../../../image/index'
import './sale.scss'

export default function Sale() {

  const [second,setSecond] = useState(3)
  const [minute,setMinute] = useState(0)
  const [hour,setHour] = useState(1)
  const [saleImages,setSaleImages] =useState([
    {
      url: saleImage1,
      name: 'myAlo KS72C - Chính hãng',
      oldPrice: 20990000,
      newPrice : 14990000
    },
    {
      url: iphone12mini,
      name: 'Apple iPhone 12 mini - Chính hãng VN/A',
      oldPrice: 22990000,
      newPrice : 16990000
    },
    {
      url: iphone13promax,
      name:'Apple iPhone 13 Pro Max - Chính hãng VN/A',
      oldPrice: 32990000,
      newPrice : 28990000
    },
    {
      url: saleImage4,
      name:'Vivo Y15s - Chính hãng',
      oldPrice: 12990000,
      newPrice : 8990000
    },
    {
      url: iphone13,
      name:'Apple iPhone 13 - Chính hãng VN/A',
      oldPrice: 18990000,
      newPrice : 14990000
    },
    {
      url: iphone13promax256,
      name:'Apple iPhone 13 Pro Max - 256GB - Chính hãng VN/A',
      oldPrice: 38990000,
      newPrice : 32990000
    },
  ]) 
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(()=>{

    const timerId = setTimeout(()=>{
      setSecond(second - 1)
    },1000)
    if(second === 0  && minute ===0){
        setHour(hour - 1)
    }
    if(second === 0){
      if(minute ===0){
      setMinute(59)
      }else{
        setMinute(minute-1)
      }
      setSecond(59)   
      clearTimeout(timerId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[second])
  return (
    <>
    {hour >= 0  && 
    <div className="sale-content">   
      <div className="sale-header">
      <p className="sale-title">Flash sale online</p>
      <div className="time-sale">
        <strong className="time-item">{Math.floor(hour /10)}</strong>
        <strong className="time-item">{hour % 10}</strong>
        <span>:</span>
        <strong className="time-item">{Math.floor(minute /10)}</strong>
        <strong className="time-item">{minute%10}</strong>
        <span>:</span>
        <strong className="time-item">{Math.floor(second /10)}</strong>
        <strong className="time-item">{second%10}</strong>
      </div>
      </div>
    <div className="sale-container">
      <Carousel responsive={responsive}>
      {saleImages.length >0 && saleImages.map((saleImage,index) => (
        <NavLink key={index} title={saleImage.name} className='sale-product-link' to={"/store/"+(index+1)}>
          <div className="sale-product"  >
          <img src={saleImage.url} className='sale-img' alt="sale-img"  />
          <p className="sale-product-name">{saleImage.name}</p>
          <div className="sale-product-price">
          <p className="sale-product-new-price">{formatNumber(saleImage.newPrice)} đ</p>
          <p className="sale-product-old-price">{formatNumber(saleImage.oldPrice)} đ</p>
          </div>
        </div>
        </NavLink>
      ))}
      </Carousel>
    </div>
    </div>
  }
    </>
  );
}
