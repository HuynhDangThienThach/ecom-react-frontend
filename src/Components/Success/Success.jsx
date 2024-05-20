import React from "react";
import "./Success.css";
import success_icon from "../Assets/success_icon.png";
const Success = () => {
   const redirectToHome = () => {
     // Điều hướng người dùng đến trang chính
     window.location.href = "/";
   };
  return (
    <div className="containerr">
      <img src={success_icon} alt="" className="iconn"/>
      <h1 className="headingg">Thanh toán thành công</h1>
      <p className="messagee">
        Cảm ơn bạn đã đặt hàng! Đơn hàng của bạn đã được xử lý thành công.
      </p>
      <button onClick={redirectToHome} className="buttonn">
        Quay lại trang chính
      </button>
    </div>
  );
};

export default Success;
