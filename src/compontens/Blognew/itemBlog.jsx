import React from "react";
import styled from "styled-components";

const ItemStyle = styled.div`
  display: flex;
  .image {
    width: 260px;
    height: 180px;
    flex-shrink: 1;
    object-fit: cover;
  }
  .title {
    font-size: 25px;
  }
  .info {
    margin-left: 10px;
  }
  .readtime {
    font-size: 12px;
    line-height: 15px;
  }
  @media only screen and (max-width: 1140px) {
    width: 90%;
    flex-direction: column;
    .image {
      width: 100%;
    }
    .info {
      margin-left: 0px;
    }
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;

function ItemBlog() {
  return (
    <ItemStyle>
      <div className="image">
        <img
          src="https://i.pinimg.com/736x/d4/c5/79/d4c579705b1329fddd100bbbea2f4cd2.jpg"
          alt=""
          className="image"
        />
      </div>
      <div className="info">
        <p className="time">
          thứ 6 . ngày 12 tháng 02 năm 2012 <span> - 6 phút đọc</span>
        </p>
        <h3 className="title">
          Eksplorasi design untuk melamar pekerjaan UI Designer
        </h3>
      </div>
    </ItemStyle>
  );
}

export default ItemBlog;
