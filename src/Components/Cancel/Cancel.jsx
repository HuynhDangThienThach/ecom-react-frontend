import React from "react";
import "./Cancel.css";
import cancel from '../Assets/cancel.jpg'
const Cancel = () => {
   const redirectToHome = () => {
     // Điều hướng người dùng đến trang chính
     window.location.href = "/cart";
   };
  return (
    <div className="container">
      <img src={cancel} alt="" className="icon"/>
      <h1 className="heading">Thanh toán thất bại</h1>
      <p className="message">
        Đơn hàng của bạn đã thanh toán thất bại! Vui lòng thanh toán lại.
      </p>
      <button onClick={redirectToHome} className="button">Quay lại</button>
    </div>
  );
};

export default Cancel;
