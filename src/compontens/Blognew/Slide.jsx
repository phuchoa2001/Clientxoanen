import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideStyles = styled.div`
  .time,
  .desc {
    font-size: 12px;
    margin-top: 5px;
  }
  .slide_image {
    position: relative;
  }
  .readtime {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #fff;
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 12px;
  }
  .image {
    height: 100%;
    width: 100%;
  }
  .title {
    font-weight: 700;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #000;
    opacity: 1;
  }
  .slick-prev,
  .slick-next {
    position: absolute;
    bottom: 0px !important;
    right: 0px !important;
    display: block;
    top: unset;
    left: unset;
    transform: translate(-200%, 0%);
    cursor: pointer;
    z-index: 99;
  }
  .slick-next {
    transform: translate(-50%, 0%);
  }
  .slick-dots {
    bottom: auto;
    position: relative;
    margin-top: 20px;
    display: flex !important;
    flex-wrap: nowrap;

    li {
      width: auto;
      height: auto;
      margin: 0;

      + li {
        margin-left: 10px;
      }
    }
  }
  @media only screen and (max-width: 1140px) {
    margin-bottom: 10px;
  }
`;

function Slide({ slides = [] }) {
  const arr = [1, 2, 3];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SlideStyles>
      <Slider {...settings}>
        {arr.map((item) => (
          <div key={item}>
            <div className="slide_image">
              <img
                src="https://i.pinimg.com/736x/d4/c5/79/d4c579705b1329fddd100bbbea2f4cd2.jpg"
                alt=""
              />
              <div className="readtime">8 phút đọc</div>
            </div>
            <div className="info">
              <p className="time">thứ 6 . ngày 12 tháng 02 năm 2012</p>
              <h3 className="title">
                Eksplorasi design untuk melamar pekerjaan UI Designer
              </h3>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit numquam adipisci ipsa deserunt, porro veniam,
                incidunt animi sed similique quae error hic molestias quam!
                Laboriosam animi in dignissimos laborum iusto!
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </SlideStyles>
  );
}

export default Slide;
