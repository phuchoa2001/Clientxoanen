import React from "react";
import styled from "styled-components";

const SlideStyle = styled.div``;

function Slide() {
  return (
    <SlideStyle>
      <img src="" alt="" />
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
