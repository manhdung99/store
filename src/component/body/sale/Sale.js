import React from "react";
import { useState,useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {saleImage1,saleImage2,saleImage3,saleImage4,saleImage5,saleImage6} from '../../../image/index'
import './sale.scss'

export default function Sale() {

  const [secondLast,setSecondLast] = useState(3)
  const [secondFirst,setSecondFirst] = useState(1)
  const [minuteFirst,setMinuteFirst] = useState(1)
  const [minuteLast,setMinuteLast] = useState(1)
  const [hourFirst,setHourFirst] = useState(1)
  const [hourLast,setHourLast] = useState(2)
  const [saleImages,setSaleImages] =useState([
    {
      url: saleImage1,
      name: 'myAlo KS72C - Chính hãng',
      oldPrice: 14990000,
      newPrice : 20990000
    },
    {
      url: saleImage2,
      name: 'Apple iPhone 12 mini - Chính hãng VN/A',
      oldPrice: 14990000,
      newPrice : 14990000
    },
    {
      url: saleImage3,
      name:'Apple iPhone 13 Pro Max - Chính hãng VN/A',
      oldPrice: 14990000,
      newPrice : 14990000
    },
    {
      url: saleImage4,
      name:'Vivo Y15s - Chính hãng',
      oldPrice: 14990000,
      newPrice : 14990000
    },
    {
      url: saleImage5,
      name:'Apple iPhone 13 - Chính hãng VN/A',
      oldPrice: 14990000,
      newPrice : 14990000
    },
    {
      url: saleImage6,
      name:'Apple iPhone 13 Pro Max - 256GB - Chính hãng VN/A',
      oldPrice: 14990000,
      newPrice : 14990000
    },
    {
      url: saleImage6,
      name:'Apple iPhone 13 Pro Max - 256GB - Chính hãng VN/A',
      oldPrice: 14990000,
      newPrice : 14990000
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
    let total = secondFirst + secondLast +minuteLast+minuteFirst+hourLast+hourFirst

    const timerId = setTimeout(()=>{
      setSecondLast(secondLast - 1)
      console.log('render');
    },1000)
    if(total === 0){
    } 
    if(secondFirst === 0 && secondLast === 0 && minuteLast ===0 && minuteFirst ===0 && hourLast ===0){
      setHourFirst(hourFirst - 1)
    }
    if(secondFirst === 0 && secondLast === 0 && minuteLast ===0 && minuteFirst ===0){
      if(hourLast === 0){
        setHourLast(4)
      }else{
        setHourLast(hourLast-1)
      }
    }
    if(secondFirst === 0 && secondLast === 0 && minuteLast ===0){
      if(minuteFirst === 0){
        setMinuteFirst(5)
      }else{
        setMinuteFirst(minuteFirst-1)
      }
    }
    if(secondFirst === 0 && secondLast === 0){
      if(minuteLast === 0 ){
        setMinuteLast(9)
      }else{
        setMinuteLast(minuteLast-1)
      }
    }
    if(secondLast === 0){
      if(secondFirst ===0 ){
        setSecondFirst(5)
      }else{
        setSecondFirst(secondFirst -1)
      }
      setSecondLast(9)   
      clearTimeout(timerId)
    }
  },[secondLast])
  return (
    <>
    {hourFirst >= 0  && 
    <div className="sale-content">   
      <div className="sale-header">
      <p className="sale-title">Flash sale online</p>
      <div className="time-sale">
        <strong className="time-item">{hourFirst}</strong>
        <strong className="time-item">{hourLast}</strong>
        <span>:</span>
        <strong className="time-item">{minuteFirst}</strong>
        <strong className="time-item">{minuteLast}</strong>
        <span>:</span>
        <strong className="time-item">{secondFirst}</strong>
        <strong className="time-item">{secondLast}</strong>
      </div>
      </div>
    <div className="sale-container">
      <Carousel responsive={responsive}>
      {saleImages.length >0 && saleImages.map((saleImage,index) => (
        <div className="sale-product" key={index} >
          <img src={saleImage.url} className='sale-img' alt="sale-img"  />
          <p className="sale-product-name">{saleImage.name}</p>
          <div className="sale-product-price">
          <p className="sale-product-new-price">{formatNumber(saleImage.newPrice)} đ</p>
          <p className="sale-product-old-price">{formatNumber(saleImage.oldPrice)} đ</p>
          </div>
        </div>
      ))}
      </Carousel>
    </div>
    </div>
  }
    </>
  );
}
