import React from 'react'
import logo from '../../image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons' 
import Nav from './nav'
import 'react-slideshow-image/dist/styles.css'
import './header.scss'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

const Header = ({cartItems}) => {
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
            <Link to="/store/cart">
            <div className='cart-wrap'>
                <span className='cart-icon'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                 {cartItems.length > 0 &&   <span className='cart-notice'>{cartItems.length}</span> }
            </div>
            </Link>
        </div>
        <Nav />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cartItems: state.cartItems
    };
  };


export default connect(mapStateToProps, null)(Header);