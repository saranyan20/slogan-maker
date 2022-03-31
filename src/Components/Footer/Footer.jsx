import './footer.scss';

import LogoWhite from '../../Assets/Images/logo-white.svg';
import IndiaFlag from '../../Assets/Images/india-flag.svg';

function Footer() {
  return (
    <div className='d-footer'>
      <div className='d-container pt-5'>
        <div className='d-footer__top--box'>
          <div className='d-footer__image--wrap'>
            <img src={LogoWhite} />
          </div>
          <div className='d-footer__link--wrap'>
            <ul>
              <li>Contact</li>
              <li>FAQ's</li>
            </ul>
            <ul>
              <li>Tutorials</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>Privacy</li>
              <li>Banned Items</li>
            </ul>
            <ul>
              <li>About</li>
              <li>Jobs</li>
            </ul>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>

        <hr />
        {/* bottom box nor lap and desktop screens */}
        <div className='d-footer__bottom--box'>
          <p>Dukaan 2020, All rights reserved.</p>
          <p>
            Made in
            <img src={IndiaFlag} className='px-2' />
          </p>
        </div>

        {/* bottom box for mobile and tablet screens */}
        <div className='d-footer__bottom--box-mobile'>
          <div>
            <img src={LogoWhite} />
            <p className='m-0'>Dukaan 2020, All rights reserved.</p>
            <p className='m-0'>
              Made in
              <img src={IndiaFlag} className='px-2 m-0' />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
