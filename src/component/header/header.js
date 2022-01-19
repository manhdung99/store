import React from 'react'
import logo from '../../image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons' 
import Nav from './nav'
import 'react-slideshow-image/dist/styles.css'
import './header.scss'
import { Link,useHistory } from 'react-router-dom'
import { connect } from "react-redux";
import { useEffect,useState } from 'react'

const Header = ({cartItems,isLogin,updateIsLogin,updateSearchItem,searchItems}) => {
    
    const [inputValue,setInputValue] = useState('')
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
    const handleUpdateValue = (e) =>{
        setInputValue(e.target.value)
        updateSearchItem(e.target.value)
    }

    const handleSearchItem = () =>{
        updateSearchItem(inputValue);
        history.push('/store/search') 
    }

    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      };
    return (
        <div className='header'>
        <div className='container'>
            <div className='logo-wrap'>
            <Link to="/store/"><img className='logo-img' src = {logo} alt= "logo"/></Link>
            </div>
            <div className='search-content'>
                <input className='search-input' value={inputValue}
                onChange={(e) => handleUpdateValue(e)}
                type= 'text' placeholder='Tìm kiếm theo tên sản phẩm' />
                {searchItems.length > 0 &&
                <div className='search-items'>
                    <ul className='search-list'>
                        {searchItems.map((item,index)=>(
                            <li key={index} className='search-item'>
                            <img src='https://hoanghamobile.com/productlist/dst/Uploads/2020/12/15/image-removebg-preview.png' className='search-item-img' alt=''></img>
                            <div className='search-item-info'>
                                <p className='search-item-name'>{item.name}</p>
                                <p className='search-item-price'>{formatNumber(item?.price ? item.price : item.newPrice )}</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
                }
                <span
                onClick={()=>handleSearchItem()}
                className='search-icon'>
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
      cartItems: state.cartReducer.cartItems,
      isLogin : state.cartReducer.isLogin,
      searchItems : state.searchReducer.searchItems
    };
  };

  const mapDispatchToProps  = (dispatch) =>{
    return {
        updateIsLogin : (value) => dispatch({type:'UPDATE_LOGIN',payload:value}),
        updateSearchItem : (value) => dispatch({type:'SEARCH',payload:value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
