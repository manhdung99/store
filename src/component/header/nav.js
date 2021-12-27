import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faLaptop,
  faTabletAlt,
  faHeadphonesAlt,
  faHome,
  faGamepad,
  faTools,
  faSimCard,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <div className="topnav">
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faMobileAlt} />
        </span>
        <span className="nav-item-name">Điện Thoại</span>
        <div className="sub-container">
          <div className="sub">
            <div className="menu menu-g3">
              <h4 className="menu-title">Hãng sản xuất</h4>
              <ul className="menu-list">
                <li className="menu-item l-4">Iphone</li>
                <li className="menu-item l-4">Xiaomi</li>
                <li className="menu-item l-4">OPPO</li>
                <li className="menu-item l-4">Energizer</li>
                <li className="menu-item l-4">Itel</li>
                <li className="menu-item l-4">XOR</li>
                <li className="menu-item l-4">Realme</li>
                <li className="menu-item l-4">Blackberry</li>
                <li className="menu-item l-4">Masstel</li>
                <li className="menu-item l-4">BPhone</li>
                <li className="menu-item l-4">Samsung</li>
                <li className="menu-item l-4">Nokia</li>
                <li className="menu-item l-4">Vivo</li>
                <li className="menu-item l-4">Philips</li>
                <li className="menu-item l-4">TECNO</li>
              </ul>
            </div>
            <div className="menu menu-g1">
              <h4 className="menu-title">Mức giá</h4>
              <ul className="menu-list">
                <li className="menu-item l-12">Dưới 3 triệu</li>
                <li className="menu-item l-12">Từ 3 đến 6 triệu</li>
                <li className="menu-item l-12">Từ 6 đến 10 triệu</li>
                <li className="menu-item l-12">Từ 10 đến 15 triệu</li>
                <li className="menu-item l-12">Trên 15 triệu</li>
              </ul>
            </div>
            <div className=" menu menu-g1">
              <h4 className="menu-title">Quan tâm nhất</h4>
              <ul className="menu-list">
                <li className="menu-item l-12">Hôm nay</li>
                <li className="menu-item l-12">Tuần này</li>
                <li className="menu-item l-12">Tháng này</li>
                <li className="menu-item l-12">Năm nay</li>
              </ul>
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faMobileAlt} />
        </span>
        <span className="nav-item-name">Đồng hồ</span>
        <div className="sub-container">
          <div className="sub">
            <div className="menu menu-g1">
              <h4 className="menu-title">Đồng hồ</h4>
              <ul className="menu-list">
                <li className="menu-item l-3">Apple Watch</li>
                <li className="menu-item l-3">Samsung</li>
                <li className="menu-item l-3">Xiaomi</li>
                <li className="menu-item l-3">Garmin</li>
                <li className="menu-item l-3">Tic Watch</li>
                <li className="menu-item l-3">Amazfit</li>
                <li className="menu-item l-3">Đồng hồ trẻ em</li>
                <li className="menu-item l-3">Huawei</li>
                <li className="menu-item l-3">Masstel</li>
                <li className="menu-item l-3">OPPO</li>
                <li className="menu-item l-3">Realme</li>
                <li className="menu-item l-3">Top vòng đeo tay</li>
                <li className="menu-item l-3">Fitbit</li>
              </ul>
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faLaptop} />
        </span>
        <span className="nav-item-name">LapTop</span>
        <div className="sub-container">
          <div className="sub">
            <div className="menu menu-g1">
              <h4 className="menu-title">Hãng Sản Xuất</h4>
              <ul className="menu-list">
                <li className="menu-item l-12 up">MacBook</li>
                <li className="menu-item l-12 up">Asus</li>
                <li className="menu-item l-12 up">Dell</li>
                <li className="menu-item l-12 up">Hp</li>
                <li className="menu-item l-12 up">Imac 2021</li>
                <li className="menu-item l-12 up">Lenovo</li>
              </ul>
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faTabletAlt} />
        </span>
        <span className="nav-item-name">Tablet</span>
        <div className="sub-container">
          <div className="sub">
            <div className="menu menu-g1">
              <h4 className="menu-title">Hãng Sản Xuất</h4>
              <ul className="menu-list">
                <li className="menu-item l-12 up">Lenovo</li>
                <li className="menu-item l-12 up">Nokia</li>
                <li className="menu-item l-12 up">Ipad</li>
                <li className="menu-item l-12 up">Samsung</li>
                <li className="menu-item l-12 up">Xiaomi</li>
                <li className="menu-item l-12 up">Huawei</li>
              </ul>
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faHeadphonesAlt} />
        </span>
        <span className="nav-item-name">Âm thanh</span>
      </NavLink>
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faHome} />
        </span>
        <span className="nav-item-name">Smart Home</span>
      </NavLink>
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faMobileAlt} />
        </span>
        <span className="nav-item-name">Phụ Kiện</span>
      </NavLink>
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faGamepad} />
        </span>
        <span className="nav-item-name">Đồ chơi công nghệ</span>
      </NavLink>
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faMobileAlt} />
        </span>
        <span className="nav-item-name">Máy trôi</span>
      </NavLink>
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faSimCard} />
        </span>
        <span className="nav-item-name">Sim Thẻ</span>
      </NavLink>
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faTools} />
        </span>
        <span className="nav-item-name">Sửa chữa</span>
      </NavLink>
      <NavLink className="nav-item" to="">
        <span className="nav-item-icon">
          <FontAwesomeIcon icon={faFire} />
        </span>
        <span className="nav-item-name">CT khuyến mãi</span>
      </NavLink>
    </div>
  );
}
