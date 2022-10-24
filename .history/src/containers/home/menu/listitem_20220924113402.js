
import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import '../../../assets/css/menu.css';
import '../../../assets/css/menu_gird.css';
import array from '../app/menuarr';
import Item from './item'
import Blognew from '../../../compontens/Blognew/blognew';
import Gotop from '../../../compontens/gotop/Gotop';
import Action from '../../../compontens/ListApp/Action';

const ListItemStyles = styled.div`
.header_Listapp {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}
 @media only screen and (max-width: 576px) {
    #listApp {
      margin: 0px !important;
    }
    .row>* {
      padding: 0px !important;
    }
  }
`
function Listitem() {
  var listitem = array.slice(0, 12).map((item, index) => {
    return (
      <Item key={index} name={item.name} Context={item.Context} url={item.url} img={item.img} Goverment={item.Goverment} />
    )
  })
  return (
    <div>
      <Blognew />
      <ListItemStyles>
        <div className='header_Listapp'>
          <h3>Các ứng dụng  của website</h3>
          <Action />
        </div>
        <div className='row g-5' id="listApp">
          {listitem}
        </div>
      </ListItemStyles>
      <Gotop />
    </div>
  );
}

export default Listitem;