import React from "react";
import styled from "styled-components";

import { TopIcon, DownIcon } from "../../assets/Icon";

const GotopStyle = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
  height: 52px;
  overflow: hidden;
  .boxIcon {
    color: #333;
    padding: 10px;
    background: #fff;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    border-radius: 50%;
    border: 1px solid #333;
    opacity: 1;
    transition: transform 300ms ease-in-out;
  }
  &.bottom {
    .boxIcon {
      transform: translateY(-100%);
    }
  }
`;

function Gotop() {
  return (
    <GotopStyle className="bottom">
      <div className="boxIcon">
        <TopIcon className={"icon"} />
      </div>
      <div className="boxIcon">
        <DownIcon className={"icon"} />
      </div>
    </GotopStyle>
  );
}

export default Gotop;
