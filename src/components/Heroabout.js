import React from 'react'
import waves from '../img/bg/waves.jpg'

const HeroAbout = class extends React.Component {
  render() {
    return (

    <header className="page header text-contrast overlay alpha-8 image-background cover gradient gradient-purple-blue" 
    style="background-image: url('{waves}')
    ">
    <div className="divider-shape">
    <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1000 100"
    preserveAspectRatio="none" 
    className="shape-waves" 
    style="left: 0; transform: rotate3d(0,1,0,180deg);"
    >
    <path className="shape-fill shape-fill-contrast" 
    d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z">
    </path>
    </svg>
    </div>
    <div className="container" style="">
    <div className="row">
    <div className="col-md-6">
    <h1 className="regular display-4 text-contrast mb-4">About us</h1>
    <p className="lead text-contrast">Banqee is an all inclusive financial assistant and is packed with services that you will use everyday to help you take control of your finances.</p>
    </div>
    </div>
    </div>
    </header>
    
    )
  }
}

export default HeroAbout
