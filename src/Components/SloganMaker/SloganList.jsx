import './sloganMaker.scss';
import ReactTooltip from 'react-tooltip';
import { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';

function SloganList(props) {
  const { slogans, searchKeyword, totalCount, getSlogansForExport } = props;
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  let searchResultText = '';
  if (searchKeyword !== '') {
    searchResultText = (
      <h5 className='d-slogan-list__title'>
        We have generated {totalCount} slogans for "{searchKeyword}"
      </h5>
    );
  }

  return (
    <div className='d-slogan-list my-5'>
      <div className='d-slogan-list__header'>
        <div>{searchResultText}</div>
        <CSVLink
          className='d-btn d-btn-primary-outline px-3 py-1 text-decoration-none d-export-btn'
          data={getSlogansForExport()}
          filename={'generated-slogans.csv'}
        >
          Download all
        </CSVLink>
      </div>
      <div className='row mt-4'>
        {slogans.map((slogan, index) => (
          <div className='col-sm-6 mb-3' key={index}>
            <div
              data-tip=''
              className='card d-slogan-list__card'
              onClick={() => {
                setIsCopied(true);
                navigator.clipboard.writeText(slogan.text);
              }}
              onMouseLeave={() => {
                if (isCopied) setIsCopied(false);
              }}
            >
              <div className='card-body'>
                <p className='d-slogan-list__item mb-0'>{slogan.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactTooltip place='left' getContent={() => (isCopied ? 'Copied' : 'Click to copy')} />
    </div>
  );
}

export default SloganList;
