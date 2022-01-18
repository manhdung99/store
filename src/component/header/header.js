import React from 'react'
import logo from '../../image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons' 
import Nav from './nav'
import 'react-slideshow-image/dist/styles.css'
import './header.scss'
import { Link,useHistory } from 'react-router-dom'
import { connect } from "react-redux";
import { useEffect } from 'react'

const Header = ({cartItems,isLogin,updateIsLogin}) => {
    

    const history = useHistory()
    useEffect(()=>{
        if(isLogin === false){
            history.push('/store/login')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleUpdateLogin = () => {
            if(isLogin === true){
                localStorage.setItem('isLogin',false)
                updateIsLogin(false);
            }
    }

    return (
        <div className='header'>
        <div className='container'>
            <div className='logo-wrap'>
            <Link to="/store/"><img className='logo-img' src = {logo} alt= "logo"/></Link>
            </div>
            <div className='search-content'>
                <input className='search-input' type= 'text' placeholder='Bạn muốn tìm gì?' />
                <span className='search-icon'>
                    <FontAwesomeIcon  icon={faSearch} />
                </span>
            </div>
            <Link style={{textDecoration: 'none'}} to="/store/login"><span onClick={() => handleUpdateLogin()} className='login-btn'>{isLogin ? 'Đăng Xuất' : 'Đăng Nhập'}</span></Link>
            <Link to="/store/cart">
            <div>
            </div>
            <div className='cart-wrap'>
                <span className='cart-icon'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                 {cartItems.length > 0 &&   <span className='cart-notice'>{cartItems.length}</span>}
            </div>
            </Link>
        </div>
        <Nav />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cartItems: state.cartItems,
      isLogin : state.isLogin
    };
  };

  const mapDispatchToProps  = (dispatch) =>{
    return {
        updateIsLogin : (value) => dispatch({type:'UPDATE_LOGIN',payload:value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
