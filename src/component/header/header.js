import React from 'react'
import logo from '../../image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons' 
import Nav from './nav'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {image5,image6,image7} from '../../image/index'
import './header.scss'

export default function Header() {
    
    const slideImages = [
        {
          url: image5,
          caption: 'Slide 1'
        },
        {
          url: image6,
          caption: 'Slide 2'
        },
        {
          url: image7,
          caption: 'Slide 3'
        },
      ];

    return (
        <div className='header'>
        <div className='container'>
            <div className='logo-wrap'>
            <img className='logo-img' src = {logo} alt= "logo"/>
            </div>
            <div className='search-content'>
                <input className='search-input' type= 'text' placeholder='Bạn muốn tìm gì?' />
                <span className='search-icon'>
                    <FontAwesomeIcon  icon={faSearch} />
                </span>
            </div>
            <div className='cart-wrap'>
                <span className='cart-icon'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                    <span className='cart-notice'>2</span>
            </div>
        </div>
        <Nav />
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
            <img style={{width: 1200, height: 400}} className='slide-img' src={slideImage.url} alt="logo" />
            </div>
          ))} 
        </Slide>
        </div>
        </div>
    )
}
