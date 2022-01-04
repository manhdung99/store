import React from "react";
import "./textDetail.scss";
import { previewImage1,textImage } from "../../../image/index";
import { Link } from "react-router-dom";

export default function TextDetail() {
  return (
    <div className="product-infomation-detail">
      <div className="product-text">
        <p>
          Do ảnh hưởng của việc thiếu Chip trong khâu sản xuất và sự chậm trễ
          trong việc vận chuyển bởi tác động của COVID-19, các sản phẩm iPhone
          sẽ về với lượng hàng ít hơn dự kiến và chậm hơn kế hoạch, Hoàng Hà
          Mobile rất xin lỗi Quý khách. Hoàng Hà Mobile cảm ơn quý khách hàng đã
          lựa chọn và mong quý khách thông cảm cho tình trạng này.
        </p>
        <p>
          Tất cả iPhone chính hãng VN/A được phân phối tại Hoàng Hà Mobile đều
          được nhập trực tiếp từ Công ty TNHH Apple Việt Nam. HoangHa Mobile là
          nhà bán lẻ ủy quyền chính thức của Apple tại Việt Nam.
        </p>
        <img src={textImage} alt=""></img>
        <p className="note">
          Tem ICT có trên các sản phẩm iPhone chính hãng VN/A
        </p>
        <strong>
          Mua iPhone 13 Pro Max chính hãng, giá tốt tại Hoàng Hà Mobile
        </strong>
        <p>
          Apple đã chính thức ra mắt dòng iPhone 2021 với tên gọi iPhone 13
          Series. Trong đó iPhone 13 Pro Max là phiên bản cao cấp nhất với màn
          hình lớn, tốc độ làm tươi 120Hz và dung lượng lưu trữ lên tới 1TB.
        </p>
        <strong>
          Thiết kế vuông vức sang trọng, tần số quét lên tới 120Hz
        </strong>
        <p>
          Xét về phong cách thiết kế, iPhone 13 Pro Max vẫn sở hữu khung viền
          vuông vức bằng kim loại sang trọng tương tự như iPhone 12 Pro Max. Mặt
          lưng của máy được hoàn thiện nhám để tránh lưu lại vân tay khi sử
          dụng. Cầm chiếc iPhone 13 Pro Max trên tay chắc chắn sẽ thu hút mọi
          ánh nhìn bởi thiết kế quá ấn tượng. Là chiếc iPhone lớn nhất nên màn
          hình của iPhone 13 Pro Max cũng có kích thước lên tới 6.7 inch. Trên
          màn hình vẫn có tai thỏ quen thuộc nhưng đã được tinh chỉnh nhỏ gọn
          hơn thế hệ trước 20% nhằm tối ưu hóa không gian hiển thị. Camera
          selfie 12MP nằm trong tai thỏ và cung cấp bảo mật Face ID. Màn hình
          vẫn được bảo vệ bởi kính cường lực Ceramic Shield siêu bền. Apple đã
          trang bị màn hình Super Retina XDR với công nghệ ProMotion giúp tinh
          chỉnh tần số quét 10 - 120Hz. Độ sáng tối đa cũng đã được tăng lên
          1.200 nits. Có thể nói đây là điểm sáng giá nhất của iPhone 13 Pro
          Max.
        </p>
      </div>
      <div className="product-spect">
        <h3 className="product-spect-title">
          Thông số kỹ thuật Apple iPhone 13 Pro Max - 256GB - Chính hãng VN/A
        </h3>
        <div className="product-spect-img-wrap">
          <img className="product-spect-img" src={previewImage1} alt="" />
          <Link className="configuration-detail" to="">
            <span>Cấu hình chi tiết</span>
          </Link>
        </div>
        <ul className="spect-special">
          <li className="spect-special-item">
            <strong>Công nghệ màn hình : </strong>
            <span> OLED </span>
          </li>
          <li className="spect-special-item">
            <strong>Độ phân giải : </strong>
            <span> 1284 x 2778 Pixels, 3 camera 12 MP, 12 MP </span>
          </li>
          <li className="spect-special-item">
            <strong>Hệ điều hành : </strong>
            <span> iOS 15 </span>
          </li>
          <li className="spect-special-item">
            <strong>Chip xử lý (CPU) : </strong>
            <span> Apple A15 Bionic 6 nhân </span>
          </li>

          <li className="spect-special-item">
            <strong>Bộ nhớ trong (ROM) : </strong>
            <span> 256 GB </span>
          </li>
          <li className="spect-special-item">
            <strong>RAM : </strong>
            <span> 6 GB </span>
          </li>
          <li className="spect-special-item">
            <strong>Mạng di động : </strong>
            <span> Hỗ trợ 5G </span>
          </li>
          <li className="spect-special-item">
            <strong>Số khe sim : </strong>
            <span> 1 Nano SIM & 1 eSIM </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
