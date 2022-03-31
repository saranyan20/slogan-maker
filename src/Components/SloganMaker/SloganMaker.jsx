import './sloganMaker.scss';
import SloganList from './SloganList';
import Pagination from '../Pagination/Pagination';

import { StoreContext } from '../../Store/store';
import { useContext, useState, useMemo, useEffect } from 'react';
const PageSize = 10;

function SloganMaker() {
  const [slogans] = useContext(StoreContext).slogans;
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  let filteredSlogans = [...slogans];

  function getCurrentPageData() {
    let firstPageIndex = (currentPage - 1) * PageSize;
    let lastPageIndex = firstPageIndex + PageSize;

    if (searchKeyword !== '') {
      filteredSlogans = slogans.filter((el) => el.text.toLowerCase().includes(searchKeyword.toLowerCase()));
      if (filteredSlogans.length > 0) {
        firstPageIndex = 0;
        lastPageIndex = PageSize;
      } else {
        filteredSlogans = [...slogans];
      }
    }

    return filteredSlogans.slice(firstPageIndex, lastPageIndex);
  }

  return (
    <div className='d-sloganmaker'>
      <div className='card d-sloganmaker-card'>
        <div className='card-body d-sloganmaker-card__body '>
          <h5 className='d-title'>Free slogan Maker</h5>
          <p>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free</p>

          <div className='mt-5'>
            <label>Word of your slogan</label>
            <input
              type='search'
              className='form-control mt-2'
              placeholder='Enter your word'
              onChange={(e) => {
                setSearchKeyword(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <button className='d-btn d-btn-primary my-5'>Generate slogans</button>

          <hr />
          <SloganList slogans={getCurrentPageData()} searchKeyword={searchKeyword} totalCount={filteredSlogans.length} />
          <hr />

          <Pagination
            className='pagination-bar my-5'
            currentPage={currentPage}
            totalCount={filteredSlogans.length}
            pageSize={PageSize}
            onPageChange={(page) => {
              setCurrentPage(page);
              getCurrentPageData();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SloganMaker;
