import React from "react";
import "./appleReseller.scss";
import { Link } from "react-router-dom";
import { apple, iphone11, giaSoc,iphone12,iphone12mini,iphone13promax,iphone13promax256 } from "../../../image/index";
import { useState } from "react";

export default function AppleReseller() {
  const [appleProducts, setAppleProducts] = useState([
    {
      url: iphone11,
      name: "Apple iPhone 11 - 64GB - Chính hãng VN/A",
      content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
      oldPrice: 19990000,
      newPrice: 13990000,
      promotion: [
        " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
        " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
      ],
    },
    {
        url: iphone12,
        name: "Apple iPhone 12 - 64GB - Chính hãng VN/A",
        content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
        oldPrice: 21990000,
        newPrice: 14990000,
        promotion: [
          " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
          " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
        ],
      },
      {
        url: iphone12mini,
        name: "Apple iPhone 12 mini - 64GB - Chính hãng VN/A",
        content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
        oldPrice: 16990000,
        newPrice: 11990000,
        promotion: [
          " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
          " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
        ],
      },
      {
        url: iphone13promax,
        name: "Apple iPhone 13 ProMax - 128GB - Chính hãng VN/A",
        content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
        oldPrice: 28990000,
        newPrice: 24990000,
        promotion: [
          " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
          " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
        ],
      },
      {
        url: iphone13promax256,
        name: "Apple iPhone 13 ProMax 256G - 64GB - Chính hãng VN/A",
        content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
        oldPrice: 32990000,
        newPrice: 28990000,
        promotion: [
          " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
          " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
        ],
      },
      {
        url: iphone11,
        name: "Apple iPhone 11 - 64GB - Chính hãng VN/A",
        content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
        oldPrice: 19990000,
        newPrice: 13990000,
        promotion: [
          " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
          " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
        ],
      },
      {
          url: iphone12,
          name: "Apple iPhone 12 - 64GB - Chính hãng VN/A",
          content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
          oldPrice: 21990000,
          newPrice: 14990000,
          promotion: [
            " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
            " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
          ],
        },
        {
          url: iphone12mini,
          name: "Apple iPhone 12 mini - 64GB - Chính hãng VN/A",
          content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
          oldPrice: 16990000,
          newPrice: 11990000,
          promotion: [
            " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
            " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
          ],
        },
        {
          url: iphone13promax,
          name: "Apple iPhone 13 ProMax - 128GB - Chính hãng VN/A",
          content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
          oldPrice: 28990000,
          newPrice: 24990000,
          promotion: [
            " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
            " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
          ],
        },
        {
          url: iphone13promax256,
          name: "Apple iPhone 13 ProMax 256G - 64GB - Chính hãng VN/A",
          content: "Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
          oldPrice: 32990000,
          newPrice: 28990000,
          promotion: [
            " Giảm thêm tới 1.500.000đ khi Thu cũ - Lên đời iPhone 13 Series",
            " Tặng sim data Mobifone Hera 5G (2.5GB/ngày) ( Chưa bao gồm tháng đầu tiên)- Lưu ý: chỉ mua trực tiếp tại cửa hàng, không áp dụng shop SIS Hà Nội",
          ],
        },
  ]);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <div className="home-product">
      <div className="home-product-header">
        <Link className="home-product-link" to="">
          Apple Authorised reseller
        </Link>
      </div>
      <div className="home-product-body">
        <div className="product-list">
        {appleProducts.map((appleProduct,index)=>(
            <div className="product-item">
                <Link to= "" >
            <img src={appleProduct.url} className="product-item-img" alt="" />
                </Link>
            <Link to="" className="product-item-link">
              <p className="product-item-name">
               {appleProduct.name}
              </p>
            </Link>
            <div className="product-item-price">
              <p className="product-item-new-price">{formatNumber(appleProduct.newPrice)} đ</p>
              <p className="product-item-old-price">{formatNumber(appleProduct.oldPrice)} đ</p>
            </div>
            <div className="product-item-note">
              <span className="bag">KM</span>
              <label
                title={appleProduct.content}
                className="note-content"
              >
                {appleProduct.content.substring(0,35)}...
              </label>
              <strong className="text-orange">và {appleProduct.promotion.length -1} Km khác</strong>
            </div>
            <div className="sticker">
              <span className="apple">
                <img src={apple} alt="" />
              </span>
              { appleProduct.oldPrice - appleProduct.newPrice > 5000000 &&
              <span className="shock-price">
                <img src={giaSoc} alt="" />
              </span>
              }
            </div>
            <span className="sales"> Giảm {formatNumber(appleProduct.oldPrice - appleProduct.newPrice)} ₫</span>
          </div>
        ))
          }
        </div>
      </div>
    </div>
  );
}
