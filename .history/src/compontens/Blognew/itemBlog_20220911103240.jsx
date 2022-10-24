import React from "react";
import styled from "styled-components";

const ItemStyle = styled.div`
display: flex;
 .image {
    width: 230px;
    height: 150px;
    flex-shrink: 1;
    object-fit: cover;
 }
`;

function ItemBlog() {
  return (
    <ItemStyle>
      <img
        src="https://i.pinimg.com/736x/d4/c5/79/d4c579705b1329fddd100bbbea2f4cd2.jpg"
        alt=""
        className="image"
      />
      <div className="info">
        <p className="time">thứ 6 . ngày 12 tháng 02 năm 2012</p>
        <h3 className="title">
          Eksplorasi design untuk melamar pekerjaan UI Designer
        </h3>
      </div>
    </ItemStyle>
  );
}

export default ItemBlog;
