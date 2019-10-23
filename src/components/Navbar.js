import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="st-nav navbar main-nav navigation fixed-top no-dropdown-transition"
        role="navigation"
        id="main-nav"
        aria-label="main-nav"
      >
        <div className="container">
          <ul className="st-nav-menu nav navbar-nav">
          <li className="st-nav-section nav-item">
            <Link to="/" className="navbar-brand" title="banqee">
              <img src={logo} className="logo logo-sticky d-block d-md-none" alt="Banqee" style={{ width: '98px' }} />
            </Link>
            </li>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>

          <li
            className={`st-nav-section st-nav-primary nav-item ${this.state.navBarActiveClass}`}
          >
              <Link className="st-root-link nav-link" to="/about">
                About
              </Link>

              <Link className="st-root-link nav-link" to="/products">
                Products
              </Link>
              <Link className="st-root-link nav-link" to="/blog">
                Blog
              </Link>
              <Link className="st-root-link nav-link" to="/contact">
                Contact
              </Link>
              <Link className="st-root-link nav-link" to="/contact/examples">
                Form Examples
              </Link>
        </li>

        <li className="st-nav-section st-nav-secondary nav-item has-text-centered">

        <a
          className="btn btn-rounded btn-outline mr-3 px-3"
          href="/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-sign-in-alt d-none d-md-inline mr-md-0 mr-lg-2">
          </i>
          <span className="d-md-none d-lg-inline">Login  </span>
        </a>
              <a
                className="fas fa-user-plus d-none d-md-inline mr-md-0 mr-lg-2"
                href="/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-sign-in-alt d-none d-md-inline mr-md-0 mr-lg-2">
                </i>
                <span className="d-md-none d-lg-inline">Signup</span>
              </a>
            </li>
            <li className="st-nav-section st-nav-mobile nav-item">
            <button className="st-root-link navbar-toggler" type="button">
            <span className="icon-bar">
              </span>
            <span className="icon-bar">
              </span>
            <span className="icon-bar">
              </span>
            </button>
            <div className="st-popup">
            <div className="st-popup-container">
            <a className="st-popup-close-button">Close</a>
            <div className="st-dropdown-content-group">
            <h4 className="text-uppercase regular">Pages</h4>
            <a className="regular text-primary" href="about">
            <i className="far fa-building mr-2"></i> About </a>
            <a className="regular text-success" href="contact">
            <i className="far fa-envelope mr-2"></i> Contact </a>
            <a className="regular text-warning" href="pricing">
            <i className="fas fa-hand-holding-usd mr-2"></i> Pricing </a>
            <a className="regular text-info" href="faqs">
            <i className="far fa-question-circle mr-2"></i> FAQs</a>
            </div>
            <div className="st-dropdown-content-group border-top bw-2">
            <h4 className="text-uppercase regular">Components</h4>
            <div className="row">
            <div className="col mr-4">
            <a target="_blank" href="alert">Alerts</a>
            <a target="_blank" href="badge">Badges</a>
            <a target="_blank" href="button">Buttons</a>
            <a target="_blank" href="color">Colors</a>
            <a target="_blank" href="accordion">Accordion</a>
            <a target="_blank" href="cookie-law">Cookielaw</a>
            </div>
            <div className="col mr-4">
            <a target="_blank" href="overlay">Overlay</a>
            <a target="_blank" href="components">Progress</a>
            <a target="_blank" href="lightbox">Lightbox</a>
            <a target="_blank" href="tab">Tabs</a>
            <a target="_blank" href="tables">Tables</a>
            <a target="_blank" href="typography">Typography</a>
            </div>
            </div>
            </div>
            <div className="st-dropdown-content-group bg-light b-t">
            <a href="login">Sign in <i className="fas fa-arrow-right"></i>
            </a>
            </div>
            </div>
            </div>
            </li>
        </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
