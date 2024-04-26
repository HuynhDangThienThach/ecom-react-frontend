import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Miêu Tả</div>
        <div className="descriptionbox-nav-box fade">Bình Luận (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p> Là một loại sản phẩm mới ra mắt của cửa hàng chúng tôi. Được thiết kế tối ưu và đẹp mắt. Mang lại cảm giác thoải mái cho người dùng.
            Sẽ là một món hàng bán chạy nhất thị trường trong thời gian sắp tới. 
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox
