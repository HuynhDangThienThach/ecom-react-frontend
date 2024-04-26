import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount} =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Sản phẩm</p>
        <p>Tên sản phẩm</p>
        <p>Giá cũ</p>
        <p>Giá mới</p>
        <p>Loại hàng</p>
        <p>Xóa sản phẩm</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Tổng tiền sản phẩm</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Giá</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Phí vận chuyển</p>
              <p>Miễn phí</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Tổng</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Xác nhận đặt hàng</button>
        </div>
        <div className="cartitems-promocode">
          <p>Nếu bạn có mã khuyến mãi, hãy nhập mã đó vào đây</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Nhập code..." />
            <button>Gửi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
