import React, { useContext, useState, useRef } from "react";
import navlogo from "../Assets/nav-logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    
    <div className="navbar">
      <div className="nav-logo">
        <img src={navlogo} alt="" />
        {/* <p>Shopper</p> */}
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => {setMenu("shop");}}><Link style={{ textDecoration: "none" }} to="/">Trang chủ </Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("giadungbeps");}}> <Link style={{ textDecoration: "none" }} to="giadungbeps">Gia dụng bếp</Link>{" "}{menu === "giadungbeps" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("thietbibeps"); }}><Link style={{ textDecoration: "none" }} to="/thietbibeps"> Thiết bị bếp </Link>{" "}{menu === "thietbibeps" ? <hr /> : <></>} </li>
          <li onClick={() => { setMenu("thietbiphongs"); }}><Link style={{ textDecoration: "none" }} to="/thietbiphongs"> Thiết bị phòng </Link>{" "}{menu === "thietbiphongs" ? <hr /> : <></>} </li>
          <li onClick={() => {setMenu("noichaos");}}><Link style={{ textDecoration: "none" }} to="/noichaos"> Nồi chảo </Link>{menu === "noichaos" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?
        <button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Đăng xuất</button>
        : <Link to="/login"><button>Đăng nhập</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
export default Navbar;
