
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";

import LoadingSkeleton from '../../../compontens/LoadingSkeleton/LoadingSkeleton';

const ItemStyles = styled.div`

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
.tag {
  margin-bottom: 10px;
}
`
function ItemSkeleton() {

  return (
    <Router>
      <ItemStyles
        className=" col-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3 app-item"
        id="p-3"
      >
        <div className="card" >
          <LoadingSkeleton height={288} />
          <div className="body">
            <div className="datecreated">
              <LoadingSkeleton height={12} />
            </div>
            <div className='tag'>
              <LoadingSkeleton height={22} width={100} />
            </div>
            <div className="item_info">
              <h5 className="menu-item-title">  <LoadingSkeleton height={30} /></h5>
              <div className="menu-item-text">  <LoadingSkeleton height={41} /></div>
            </div>
          </div>
        </div>
      </ItemStyles>
    </Router>
  );
}

export default ItemSkeleton;
