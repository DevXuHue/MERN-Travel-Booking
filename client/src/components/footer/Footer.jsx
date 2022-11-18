import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Các quốc gia</li>
          <li className="fListItem">Khu vực</li>
          <li className="fListItem">Thành phố</li>
          <li className="fListItem">Quận</li>
          <li className="fListItem">Sân bay</li>
          <li className="fListItem">Khách sạn</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Nhà</li>
          <li className="fListItem">Căn hộ </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Biệt thự</li>
          <li className="fListItem">Nhà trọ</li>
          <li className="fListItem">Nhà khách</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Những chỗ nghĩ độc đáo</li>
          <li className="fListItem">Tất cả điểm đến</li>
          <li className="fListItem">Khám phá</li>
          <li className="fListItem">Đánh giá của khách</li>
          <li className="fListItem">Các bài viết</li>
          <li className="fListItem">Ưu đãi theo mùa và dịp lễ </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Thuê xe hơi</li>
          <li className="fListItem">Tìm máy bay</li>
          <li className="fListItem">Đặt nhà hàng</li>
          <li className="fListItem">Booking dành cho Đại lý</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Dịch vụ khách hàng</li>
          <li className="fListItem">Trợ giúp khách hàng</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Truyền thông</li>
          <li className="fListItem">Du lịch bền vững</li>
          <li className="fListItem">Trung tâm thông tin bảo mật</li>
          <li className="fListItem">Quan hệ cổ đông</li>
          <li className="fListItem">Điều khoản và điều kiện</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 <a href="https://github.com/DevXuHue">Thành</a> </div>
    </div>
  );
};

export default Footer