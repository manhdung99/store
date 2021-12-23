import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMobileAlt,faLaptop,faTabletAlt,faHeadphonesAlt,faHome,faGamepad,faTools,faSimCard,faFire} from '@fortawesome/free-solid-svg-icons' 

export default function Nav() {
    return (
        <div className="topnav">
      <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faMobileAlt} /></span> 
        <span className='nav-item-name'>Điện Thoại</span>
        <div className='sub-container'></div>
        </NavLink>
        <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faMobileAlt} /></span> 
        <span className='nav-item-name'>Đồng hồ</span>
        </NavLink>
        <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faLaptop} /></span> 
        <span className='nav-item-name'>LapTop</span>
        </NavLink>
        <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faTabletAlt} /></span> 
        <span className='nav-item-name'>Tablet</span>
        </NavLink>
        <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faHeadphonesAlt} /></span> 
        <span className='nav-item-name'>Âm thanh</span>
        </NavLink>
        <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faHome} /></span> 
        <span className='nav-item-name'>Smart Home</span>
        </NavLink>
        <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faMobileAlt} /></span> 
        <span className='nav-item-name'>Phụ Kiện</span>
        </NavLink>
        <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faGamepad} /></span> 
        <span className='nav-item-name'>Đồ chơi công nghệ</span>
        </NavLink>
        <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faMobileAlt} /></span> 
        <span className='nav-item-name'>Máy trôi</span>
        </NavLink>
        <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faSimCard} /></span> 
        <span className='nav-item-name'>Sim Thẻ</span>
        </NavLink>
        <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faTools} /></span> 
        <span className='nav-item-name'>Sửa chữa</span>
        </NavLink>
        <NavLink className= 'nav-item' to="">
        <span className='nav-item-icon'><FontAwesomeIcon icon={faFire} /></span> 
        <span className='nav-item-name'>CT khuyến mãi</span>
        </NavLink>
    </div>
    )
}
