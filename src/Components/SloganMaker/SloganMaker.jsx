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
  let enteredKeyword = '';

  function getCurrentPageData() {
    let firstPageIndex = (currentPage - 1) * PageSize;
    let lastPageIndex = firstPageIndex + PageSize;

    if (searchKeyword !== '') {
      filteredSlogans = slogans.filter((el) => el.text.toLowerCase().includes(searchKeyword.toLowerCase()));
      if (filteredSlogans.length > 0) {
        firstPageIndex = 0;
        lastPageIndex = PageSize;
      } else {
        filteredSlogans = [];
      }
    }
    return filteredSlogans.slice(firstPageIndex, lastPageIndex);
  }

  function handleGenerateSlogan() {
    setSearchKeyword(enteredKeyword);
    setCurrentPage(1);
  }

  function handleInput(e) {
    enteredKeyword = e.target.value;

    // for resetting the input field
    if (enteredKeyword === '') {
      handleGenerateSlogan();
    }
  }

  function getSlogansForExport() {
    return filteredSlogans.map((el) => ({
      slogans: el.text,
    }));
  }

  return (
    <div className='d-sloganmaker'>
      <div className='d-container card d-sloganmaker-card'>
        <div className='card-body d-sloganmaker-card__body '>
          <h5 className='d-title'>Free slogan Maker</h5>
          <p>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free</p>

          <div className='mt-5'>
            <label>Word of your slogan</label>
            <form>
              <input type='search' className='form-control mt-2' onInput={handleInput}></input>
            </form>
          </div>

          <button className='d-btn d-btn-primary my-5' onClick={handleGenerateSlogan}>
            Generate slogans
          </button>

          <hr />
          <SloganList
            slogans={getCurrentPageData()}
            searchKeyword={searchKeyword}
            totalCount={filteredSlogans.length}
            getSlogansForExport={getSlogansForExport}
          />
          <hr />

          <Pagination
            className='pagination-bar mt-5'
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
