import './footer.scss';

import LogoWhite from '../../Assets/Images/logo-white.svg';
import IndiaFlag from '../../Assets/Images/india-flag.svg';

function Footer() {
  return (
    <div className='d-footer'>
      <div className='d-container pt-5'>
        <div className='d-footer__top--box'>
          <div className='d-footer__image--wrap'>
            <a href='#'>
              <img src={LogoWhite} />
            </a>
          </div>
          <div className='d-footer__link--wrap'>
            <ul>
              <li>
                <a href='https://mydukaan.io/contact-us' target='_blank'>
                  Contact
                </a>
              </li>
              <li>
                <a href='https://mydukaan.io/in/faq' target='_blank'>
                  FAQ's
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='#'>Tutorials</a>
              </li>
              <li>
                <a href='https://mydukaan.io/blog' target='_blank'>
                  Blog
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='https://mydukaan.io/privacy' target='_blank'>
                  Privacy
                </a>
              </li>
              <li>
                <a href='https://mydukaan.io/files/Mydukaan_banned_products.pdf' target='_blank'>
                  Banned Items
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='https://mydukaan.io/about-us' target='_blank'>
                  About
                </a>
              </li>
              <li>
                <a href='https://angel.co/company/dukaan-app/jobs' target='_blank'>
                  Jobs
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='https://www.facebook.com/mydukaanapp/' target='_blank'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='https://twitter.com/mydukaanapp' target='_blank'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/company/dukaan/' target='_blank'>
                  Linkedin
                </a>
              </li>
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
