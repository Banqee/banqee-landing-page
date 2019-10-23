import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="site-footer section block bg-contrast">
          <div className="container py-4">
          <div className="row align-items-center">
        <div className="col-md-3 text-center text-md-left">
          <span><img
            src={logo}
            alt="Banqee"
            style={{ width: '14em', height: '10em' }}
          /></span>
          <span><p className="mt-2 mb-0 text-secondary small">© 2019 Banqee. All Rights Reserved</p></span>
        </div>
        <div className="col-md-4 text-center">
        <a title="facebook" href="https://facebook.com">
          <img
            src={facebook}
            alt="Facebook"
            style={{ width: '1em', height: '1em' }}
          />
        </a>
        <a title="twitter" href="https://twitter.com">
          <img
            className="fas fa-lg"
            src={twitter}
            alt="Twitter"
            style={{ width: '1em', height: '1em' }}
          />
        </a>
        <a title="instagram" href="https://instagram.com">
          <img
            src={instagram}
            alt="Instagram"
            style={{ width: '1em', height: '1em' }}
          />
        </a>
        <a title="vimeo" href="https://vimeo.com">
          <img
            src={vimeo}
            alt="Vimeo"
            style={{ width: '1em', height: '1em' }}
          />
        </a>

        </div>
      <div className="col-md-5 text-center text-md-right">
                  <nav className="nav justify-content-center justify-content-md-start">
                    <Link to="/" className="nav-item nav-link">
                        Home
                      </Link>
                      <Link className="nav-item nav-link" to="/about">
                        About
                      </Link>
                      <Link className="nav-item nav-link" to="/products">
                        Products
                      </Link>
                      <Link className="nav-item nav-link" to="/contact/examples">
                       Examples
                      </Link>
                      <a
                        className="nav-item nav-link"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                  </nav>
              </div>


              </div>
            </div>
      </footer>
    
    )
  }
}

export default Footer
