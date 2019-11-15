import React from 'react'
import { Link } from 'gatsby'
import "./Navbar.css"
import logo from '../img/logo.png'


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
        <div className="container"
      >
          <ul className="st-nav-menu nav navbar-nav"
      >
          <li className="st-nav-section nav-item"
      >
            <Link to="/" className="navbar-brand" title="banqee">
              <img src={logo} className="logo logo-sticky d-block d-md-none" alt="Banqee" style={{ width: '120px' }} />
            </Link>
            </li>
            
          <li
            className={`st-nav-section st-nav-primary stick-right nav-item ${this.state.navBarActiveClass}`}
          >
             <Link className="st-root-link item-products st-has-dropdown nav-link" data-dropdown="blocks" to="/products">
                Product
              </Link>
              <Link className="st-root-link item-products st-has-dropdown nav-link" data-dropdown="pages" to="/blog">
                Features
              </Link>
              <Link className="st-root-link nav-link" to="/about">
               Company
              </Link>
              <Link className="st-root-link nav-link" to="/blog">
                Contact
              </Link>
              <Link className="st-root-link nav-link" to="/contact/examples">
                Form Examples
              </Link>
        </li>

        <li 
         className="st-nav-section st-nav-secondary nav-item has-text-centered"
         >
             <Link className="btn btn-rounded btn-outline mr-3 px-3" to="/login">
              <i className="fas fa-sign-in-alt d-none d-md-inline mr-md-0 mr-lg-2">
              </i>
              <span className="d-md-none d-lg-inline">
              Login  
              </span>
              </Link>
              <Link className="btn btn-rounded btn-solid px-3" to="/signup">
              <i className="fas fa-user-plus d-none d-md-inline mr-md-0 mr-lg-2">
              </i> 
              <span className="d-md-none d-lg-inline">
                Get Started
              </span>
              </Link>
           </li>
            <li 
            className="st-nav-section st-nav-mobile nav-item"
            >
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
            <Link className="st-popup-close-button"> 
             Close
            </Link>
            <div className="st-dropdown-content-group">
            <h4 className="text-uppercase regular">Pages</h4>
            <Link className="regular text-primary" to="/about">
            <i 
             className="far fa-building mr-2"
             >
            </i> 
            About 
            </Link>
            <Link className="regular text-success" to="/contact">
            <i  
            className="far fa-envelope mr-2"
             >
            </i>  
            Contact 
            </Link>
            <Link className="regular text-warning" to="/pricing">
            <i className="fas fa-hand-holding-usd mr-2"> 
            </i> 
            Pricing 
            </Link>
            <Link className="regular text-info" to="/faqs">
            <i className="far fa-question-circle mr-2">
            </i> 
            FAQs
            </Link>
            </div>
            <div className="st-dropdown-content-group border-top bw-2">
            <h4 className="text-uppercase regular">Components</h4>
            <div className="row">
            <div className="col mr-4">
            <Link target="_blank" to="alert">Alerts</Link>
            <Link target="_blank" to="badge">Badges</Link>
            <Link target="_blank" to="button">Buttons</Link>
            <Link target="_blank" to="color">Colors</Link>
            <Link target="_blank" to="accordion">Accordion</Link>
            <Link target="_blank" to="cookie-law">Cookielaw</Link>
            </div>
            <div className="col mr-4">
            <Link target="_blank" to="overlay">Overlay</Link>
            <Link target="_blank" to="components">Progress</Link>
            <Link target="_blank" to="lightbox">Lightbox</Link>
            <Link target="_blank" to="tab">Tabs</Link>
            <Link target="_blank" to="tables">Tables</Link>
            <Link target="_blank" to="typography">Typography</Link>
            </div>
            </div>
            </div>
            <div className="st-dropdown-content-group bg-light b-t">
            <Link to="/login">
             Signin
            <i className="fas fa-arrow-right">
             </i>
            </Link>
           <Link to="/signup">
            Get Started
            <i className="fas fa-arrow-right">
             </i>
            </Link>
            </div>
            </div>
            </div>
            </li>
        </ul>
          </div>
      </nav>

    )
  }
}

export default Navbar
