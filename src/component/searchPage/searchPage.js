import React from 'react'
import Header from '../header/header'
import Social from '../body/social/social'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
import './searchPage.scss';
import { apple,giaSoc } from "../../image/index";
import { connect } from 'react-redux';
const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
 const SearchPage = ({searchItems}) => {

    return (
        <div className='search-page' style={{'maxWidth' : '1200px',margin : '0 auto'}}>
            <Header />
            <div className='search-page-content'>
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
            Tìm Kiếm
          </li>
        </Link>
            </ul>
        <h3 className='main-title'>Tìm Kiếm</h3>
        {searchItems.length > 0 ? 
       <div className='search-main'>
        <div className="search-product-body">
        <div className="product-list">
        {searchItems.map((item,index)=>(
            item !== null &&
            <div className="product-item" key={index}>
                <Link to= {"/store/product/" + index} >
           {item?.url && <img src={item.url} className="product-item-img" alt="" /> }
                </Link>
            <Link to={"/store/product/" + index} className="product-item-link">
            {item?.name  && <p className="product-item-name">
               {item.name}
              </p>
              }
            </Link>
              {item?.price ? 
            <div className="product-item-price">
                  <p className="product-item-new-price">{formatNumber(item.price)} đ</p>
            </div>
            :
            item?.newPrice &&
            <div className="product-item-price">
            <p className="product-item-new-price">{formatNumber(item.newPrice)} đ</p>
              <p className="product-item-old-price">{formatNumber(item.oldPrice)} đ</p>
              </div>
            }
            <div className="product-item-note">
              <span className="bag">KM</span>
              { item?.content &&
              <label
                title={item.content}
                className="note-content"
              >
                {item.content.substring(0,35)}...
              </label>
                  }
             {item?.promotion && <strong className="text-orange">và {item.promotion.length -1} Km khác</strong> }
            </div>
            <div className="sticker">
              <span className="apple">
                <img src={apple} alt="" />
              </span>
              { item?.oldPrice && item?.newPrice && item.oldPrice - item.newPrice > 5000000 &&
              <span className="shock-price">
                <img src={giaSoc} alt="" />
              </span>
              }
            </div>
          {item?.oldPrice && item?.newPrice &&  <span className="sales"> Giảm {formatNumber(item.oldPrice - item.newPrice)} ₫</span> }
          </div>
        ))
          }
        </div>
      </div>
        </div>
        : 
        <span>Không có sản phẩm</span>
        } 
            </div>
            <Social />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchItems : state.searchReducer.searchItems
    };
  };

  const mapDispatchToProps  = (dispatch) =>{
    return {
        // updateIsLogin : (value) => dispatch({type:'UPDATE_LOGIN',payload:value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
