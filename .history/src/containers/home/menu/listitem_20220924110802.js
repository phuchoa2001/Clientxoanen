
import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import '../../../assets/css/menu.css';
import '../../../assets/css/menu_gird.css';
import array from '../app/menuarr';
import Item from './item'
import Blognew from '../../../compontens/Blognew/blognew';
import Gotop from '../../../compontens/gotop/Gotop';

const ListItemStyles = styled.div`
 
`


class listitem extends Component {
  render() {
    var listitem = array.slice(0, 12).map((item, index) => {
      return (
        <Item key={index} name={item.name} Context={item.Context} url={item.url} img={item.img} Goverment={item.Goverment} />
      )
    })
    return (
      <div>
        <Blognew />
        <ListItemStyles>
          <h3>Các ứng dụng  của website</h3>
          <div className='row g-5' id="listApp">
            {listitem}
          </div>
        </ListItemStyles>
        <Gotop />
      </div>
    );
  }
}
const MapStatusToProp = state => {
  return {

  }
}
export default connect(MapStatusToProp, null)(listitem);
