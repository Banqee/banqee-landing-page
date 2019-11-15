import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="site-footer section bg-contrast">
      <div className="bg-darker">
          <div className="container text-center py-4">
          <nav className="nav justify-content-center my-4">
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
</nav>
      </div>
        </div>
      <div 
      className="container py-4"
      >
      <div 
      className="row gap-y"
      >
       <div 
      className="col-md-4"
      >
          <span>
      <img
            src={logo}
            alt="Banqee"
            style={{ width: '14em', height: '10em' }}
          />
      </span>
          <span>
      <p 
      className="mt-2 mb-0 text-secondary small"
      >
      © 2019 Banqee. All Rights Reserved
      </p>
      </span>
        </div>
      <div
      className="col-md-4"
      >
      <h6 
      className="bold"
      >
      Your Office
      </h6>
      <p 
      className="text-secondary"
      >
      Lorem ipsum dolor sit amet, consectetur elit. Blanditiis commodi expedita, odit officiis?
      </p>
      <nav 
      className="nav flex-column small"
      >
      <div 
      className="d-flex align-items-center"
      >
      <i 
      className="fas fa-map-marker mr-2"
      >
      </i> 
      5700 Yonge Street St, Your City, YC USA
      </div>
      <div className="
      mt-2 d-flex align-items-center"
      >
      <i 
      className="fas fa-phone mr-2"
      >
      </i> 
      (123) 456-7890
    </div>
    <div 
    className="mt-2 d-flex align-items-center"
    >
    <i 
    className="fas fa-envelope mr-2"
    >
    </i> 
    <Link to="mailto:hello@banqee.com">
      hello@banqee.com
      </Link>
      </div>
      </nav>
      </div>
    <div 
    className="col-md-4"
    >
    <h6 
    className="bold"
    >
    Subscribe to our newsletter
    </h6>
    <p 
    className="text-secondary"
    >
      By registering with us, you will receive right in your inbox all new features and updates. 
      <span 
    className="bold"
    >
        Subscribe now!
        </span>
    </p>
    <form 
    action="https://banquee.com/register.php" 
    className="form" 
    data-response-message-animation="slide-in-left" 
    novalidate="novalidate"
    >
      <div 
    className="input-group"
    >
     <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
      <div className="input-group-append">
    <button className="btn btn-rounded btn-dark" type="submit">
      Register
    </button>
    </div>
    </div>
    </form>
    <div className="response-message">
    <i className="fas fa-envelope font-lg">
    </i>
    <p 
    className="font-md m-0"
    >
    Check your email
    </p>
    <p 
    className="response"
    >
      We sent you an email with a link to get started. You’ll be in your account in no time.
    </p>
    </div>
                
      <hr />
      <nav className="nav small">
      
          <Link to="/privacy-policy" className="text-secondary mr-3">
                        Privacy
                      </Link>
                      <Link className="text-secondary mr-3" to="/terms-and-conditions">
                       Terms
                      </Link>
                      <Link className="text-secondary mr-3" to="/security">
                       Security
                      </Link>
                      <Link className="text-secondary mr-3" to="/status">
                       Status
                      </Link>
                      <a
                        className="text-secondary"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
         </nav>
          </div>
             </footer>
    
    )
  }
}

export default Footer
