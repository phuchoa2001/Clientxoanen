import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Toast } from "antd-mobile";

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
    transition: transform 200ms ease-in-out;
  }
  &.Gobottom {
    .boxIcon {
      transform: translateY(-100%);
    }
  }
`;

function Gotop() {
  const [isTop, setisTop] = useState(false);
  const handleTop = () => {
    window.scrollTo(0, 0);
    Toast.show({
      content: "Bạn đã lên trang đầu",
      afterClose: () => {
        console.log("after");
      },
    });
  };
  const handleBottom = () => {
    Toast.show({
      content: "Bạn đã chuyển danh sách bài viết",
      afterClose: () => {
        console.log("after");
      },
    });
  };
  useEffect(() => {
    function ShowButton() {
      var top = window.pageYOffset || document.documentElement.scrollTop;
      if (top < 50) {
        setisTop(true);
      } else {
        setisTop(false);
      }
    }
    ShowButton();
    window.onscroll = ShowButton;
  }, []);
  return (
    <GotopStyle className={isTop ? "Gobottom" : ""}>
      <div className="boxIcon" onClick={handleTop}>
        <TopIcon className={"icon"} />
      </div>
      <div className="boxIcon" onClick={handleBottom}>
        <DownIcon className={"icon"} />
      </div>
    </GotopStyle>
  );
}

export default Gotop;
