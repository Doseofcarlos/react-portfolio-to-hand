import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          thank you for coming by
        </p>
      </section>
      <div className='footer-links'>

      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              CO
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'> © 2020</small>
          <div className='social-icons'>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
