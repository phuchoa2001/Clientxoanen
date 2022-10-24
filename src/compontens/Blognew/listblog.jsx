import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ItemBlog from "./itemBlog";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ListBlogStyles = styled.div`
  padding-left: 20px;
  .time,
  .desc {
    font-size: 12px;
    margin-top: 5px;
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
      opacity: 0;

      + li {
        margin-left: 10px;
      }
    }
  }
  @media only screen and (max-width: 1140px) {
    padding-left: 0px;
  }
`;
function ListBlog() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <ListBlogStyles>
      <Slider {...settings}>
        <div>
          <ItemBlog />
          <ItemBlog />
          <ItemBlog />
        </div>
        <div>
          <ItemBlog />
          <ItemBlog />
          <ItemBlog />
        </div>
        <div>
          <ItemBlog />
          <ItemBlog />
          <ItemBlog />
        </div>
      </Slider>
    </ListBlogStyles>
  );
}

export default ListBlog;
