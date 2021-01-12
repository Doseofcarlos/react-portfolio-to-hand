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
      <div class='footer-links'>

      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              CO
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'> © 2020</small>
          <div class='social-icons'>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
