import './header.scss';
import { useState, useEffect } from 'react';
import classnames from 'classnames';
import Logo from '../../Assets/Images/logo.svg';

function Header() {
  return (
    <div className='d-header'>
      <div className=' d-container d-header__container'>
        <img src={Logo} alt='dukaan' className='d-logo'></img>

        <div className='d-header__rightbox'>
          <h5 className='d-header__rightbox--signin mb-0 d-inline-block mr-2'>Sign In</h5>

          <button className={classnames('d-btn d-btn-secondary')}>Dukaan for PC</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
