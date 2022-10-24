import React from "react";
import styled from "styled-components";

const SlideStyle = styled.div``;

function Slide() {
  return (
    <SlideStyle>
      <img
        src=" https://i.pinimg.com/736x/d4/c5/79/d4c579705b1329fddd100bbbea2f4cd2.jpg"
        alt=""
      />
      <div className="info">
        <p className="time">thứ 6 . ngày 12 tháng 02 năm 2012</p>
        <h3>Eksplorasi design untuk melamar pekerjaan UI Designer</h3>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          numquam adipisci ipsa deserunt, porro veniam, incidunt animi sed
          similique quae error hic molestias quam! Laboriosam animi in
          dignissimos laborum iusto!
        </div>
      </div>
    </SlideStyle>
  );
}

export default Slide;
