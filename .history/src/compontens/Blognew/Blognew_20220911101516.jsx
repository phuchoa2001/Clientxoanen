import React from "react";
import styled from "styled-components";

import Slide from "./Slide";

const BlogStyle = styled.div``;

function Blognew() {
  return (
    <BlogStyle className="row">
      <h3>Tin tức mới nhất</h3>
      <div className="box">
        <Slide />
        <div className="listBlog"></div>
      </div>
    </BlogStyle>
  );
}

export default Blognew;
