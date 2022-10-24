
import { Tag } from 'antd';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import styled from "styled-components";

import GetTime from '../../../commons/getTime';

const ItemStyles = styled.div`
cursor: pointer;

.body {
 padding: 10px 0px;
 height: auto;
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
function Item({ name, description, viewTotal, icon, goverment, url, createAt }) {

  const { date, day, month, year } = GetTime(createAt);




  const history = useHistory();


  const handleNextpage = () => {
    goverment ? history.push(url) : window.open(url, '_blank');
  }
  return (
    <Router>
      <ItemStyles
        className=" col-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3 app-item"
        id="p-3"
        onClick={handleNextpage}
      >
        <div className="card" >
          <img src={icon.url} className="image" alt="..." />
          <div className="body">
            <p className="datecreated">Ngày tạo : {date} . ngày {day} tháng {month} năm {year}
            </p>
            <Tag color="blue" className="click">{viewTotal} người bấm vào</Tag>
            <div className="item_info">
              <h5 className="menu-item-title">{name}</h5>
              <p className="menu-item-text">{description}</p>
            </div>
          </div>
        </div>
      </ItemStyles>
    </Router>
  );
}

export default Item;
