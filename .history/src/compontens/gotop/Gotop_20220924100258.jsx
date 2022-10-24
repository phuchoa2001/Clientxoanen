import React from "react";
import styled from "styled-components";

const GotopStyle = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
`;

function Gotop() {
  return <GotopStyle>Gotop</GotopStyle>;
}

export default Gotop;
