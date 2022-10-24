import React from "react";
import styled from "styled-components";

import Slide from "./Slide";
import ItemBlog from "./itemBlog";

const BlogStyle = styled.div`
  padding: 10px 0px;
  .listBlog {
    padding-left: 20px;
  }
`;

function Blognew() {
  return (
    <BlogStyle>
      <h3>Tin tức mới nhất</h3>
      <div className="row g-0">
        <div className="col-6">
          <Slide />
        </div>
        <div className="col-6">
          <div className="listBlog">
            <ItemBlog />
            <ItemBlog />
            <ItemBlog />
          </div>
        </div>
      </div>
    </BlogStyle>
  );
}

export default Blognew;
