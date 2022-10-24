import React from "react";
import styled from "styled-components";

const ItemStyle = styled.div``;

function ItemBlog() {
  return (
    <ItemStyle>
      <img
        src="https://i.pinimg.com/736x/d4/c5/79/d4c579705b1329fddd100bbbea2f4cd2.jpg"
        alt=""
      />
      <div className="info"></div>
    </ItemStyle>
  );
}

export default ItemBlog;
