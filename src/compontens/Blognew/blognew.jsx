import React from "react";
import styled from "styled-components";

import Slide from "./Slide";
import ListBlog from "./listblog";

const BlogStyle = styled.div`
  padding: 10px 0px;
`;

function Blognew() {
  return (
    <BlogStyle>
      <h3>Tin tức mới nhất</h3>
      <div className="row g-0">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
          <Slide />
        </div>
        <div className="col-sm-12  col-md-12 col-lg-12 col-xl-6 col-xxl-6">
          <ListBlog />
        </div>
      </div>
    </BlogStyle>
  );
}

export default Blognew;
