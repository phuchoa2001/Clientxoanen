import { Component } from "react";
import { Tag } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from "react-router";
import styled from "styled-components";

const ItemStyles = styled.div`
.body {
 padding: 10px 0px;
 height: 200px;
}
.image {
  height: auto;
}
.datecreated  {
  font-size: 10px;
  line-height: 12px;
  margin-bottom: 10px;
}
.click {
  margin-bottom: 10px;
}
.item_info {

}
`
class item extends Component {
  handleNextpage = () => {
    const { history, url, Goverment } = this.props;
    Goverment ? history.push(url) : window.location = url
  }
  render() {
    return (
      <Router>
        <ItemStyles className=" col-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3 app-item" id="p-3">
          <div className="card" >
            <img src={process.env.PUBLIC_URL + this.props.img} className="image" alt="..." />
            <div className="body">
              <p className="datecreated">Ngày tạo : thứ 6 . ngày 12 tháng 02 năm 2012
              </p>
              <Tag color="blue" className="click">99 người bấm vào</Tag>
              <div className="item_info">
                <h5 className="menu-item-title">{this.props.name}</h5>
                <p className="menu-item-text">{this.props.Context}.</p>
              </div>
            </div>
          </div>
        </ItemStyles>
      </Router>
    );
  }
}

export default (withRouter(item));
