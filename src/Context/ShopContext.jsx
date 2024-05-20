import React, { createContext, useEffect, useState} from "react";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched products:", data); // Add this line for logging
        setAll_Product(data);
      })
      .catch((error) => console.error("Error fetching products:", error)); // Add this for error handling
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => {
          // Cập nhật giỏ hàng khi người dùng đăng nhập
          setCartItems(data);
        });
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // const placeOrder = async (event) => {
  //   event.preventDefault();
  //   const orderItems = [];
  //   all_product.forEach((item) => {
  //     if (cartItems[item.id] > 0) {
  //       let itemInfo = item;
  //       itemInfo["quantity"] = cartItems[item.id];
  //       orderItems.push(itemInfo);
  //     }
  //   });
  //   const orderData = {
  //     items: orderItems,
  //     amount: getTotalCartAmount() + 2,
  //   };
  //   try {
  //     const response = await fetch("http://localhost:4000/place", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(orderData),
  //     });
  //     const data = await response.json();
  //     if (data.success) {
  //       const { session_url } = data;
  //       window.location.replace(session_url);
  //     } else {
  //       alert("Error");
  //     }
  //   } catch (error) {
  //     console.error("Error placing order:", error);
  //     alert("Error placing order");
  //   }
  // };
  const placeOrder = async (event) => {
    event.preventDefault();
    const orderItems = [];
    all_product.forEach((item) => {
      if (cartItems[item.id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item.id];
        orderItems.push(itemInfo);
      }
    });
    const orderData = {
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    try {
      const response = await fetch("http://localhost:4000/place", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      if (data.success) {
        const { session_url } = data;
        
        // Xóa các sản phẩm đã mua khỏi giỏ hàng
        orderItems.forEach((orderItems) => {
          delete cartItems[orderItems.id];
        });

        // Cập nhật giỏ hàng trong localStorage
        localStorage.setItem('auth-token', JSON.stringify(cartItems));

        // Chuyển hướng đến trang thanh toán
        window.location.replace(session_url);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order");
    }
};


  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    placeOrder,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
