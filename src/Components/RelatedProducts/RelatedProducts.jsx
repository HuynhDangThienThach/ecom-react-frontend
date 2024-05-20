import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
import Item from '../Item/Item'
const RelatedProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);
  return (
    <div className="relatedProducts">
      <h1>Sản phẩm liên quan</h1>
      <hr />
      <div className="relatedProducts-item">
        {popularProducts.map((item, i) => {
          return (
            <div className="item-wrapper item-highlight">
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
