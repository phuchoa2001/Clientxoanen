import React from "react";
import styled from "styled-components";

import Slide from "./Slide";

const BlogStyle = styled.div`
padding: 10px 0px;
`;

function Blognew() {
  return (
    <BlogStyle className="row g-0">
      <h3>Tin tức mới nhất</h3>
      <div className="box">
        <div className="col-6">
          <Slide />
        </div>
        <div className="col-6">
          <div className="listBlog"></div>
        </div>
      </div>
    </BlogStyle>
  );
}

export default Blognew;
