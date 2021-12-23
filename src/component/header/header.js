import React from 'react'
import logo from '../../image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons' 
import './header.scss'
import Nav from './nav'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
export default function Header() {

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
        </div>
    )
}
