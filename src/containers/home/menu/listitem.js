
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'


import '../../../assets/css/menu.css';
import '../../../assets/css/menu_gird.css';
import Item from './item';
import ItemSkeleton from './itemSkeleton';
import Blognew from '../../../compontens/Blognew/blognew';
import Gotop from '../../../compontens/gotop/Gotop';
import { useCustomSearchParams } from '../../../hooks/useCustomSearchParams';
import Action from '../../../compontens/ListApp/Action';

import { useApp } from './queries';
import { Pagination } from 'antd';
import Message from '../../../compontens/Message';

const ListItemStyles = styled.div`
.header_Listapp {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}
.Pagination {
  display: flex;
  width: 100%;
  justify-content: center;
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
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })
  const Page_size = isTabletOrMobile ? 6 : 12;
  const [search, setSearch] = useCustomSearchParams({ page_size: Page_size });
  const argument = {
    params: search,
    options: {
      keepPreviousData: true,
    },
  };
  const { data, isLoading, isPreviousData, isFetching } = useApp(argument);

  const handleChange = (query) => {
    setSearch({ ...search, page_size: search.page_size, page: query })
    const a = document.createElement("a");
    a.href = "#listApp";
    a.click();
  }
  return (
    <div>
      <Blognew />
      <Message>
        <p> Chúng tôi đang xây dựng lại hệ thống và nhiều lỗi phát sinh
          . nó chưa hoàn thiện và thời gian bạn vào đây </p>
      </Message>
      <ListItemStyles>
        <div className='header_Listapp'>
          <h3>Các ứng dụng  của website</h3>
          <Action />
        </div>
        <div className='row g-5' id="listApp">

          {!isLoading && !isPreviousData && !isFetching ?
            (
              <>
                {data.data.data.map((item, index) => {
                  return (
                    <Item key={item["_id"]} {...item} />
                  )
                })}

                <div className='Pagination'>
                  <Pagination onChange={handleChange} current={data.data.meta.current_page} total={data.data.meta.total} pageSize={Page_size} />
                </div>
              </>
            ) : [...Array(Page_size).keys()].map((item, index) =>
              <ItemSkeleton key={index} />
            )
          }
        </div>
      </ListItemStyles>
      <Gotop />
    </div>
  );
}

export default Listitem;