import React from 'react'
  import Img from "gatsby-image";
  import styled from 'styled-components'

  import { FaAngleDoubleDown } from 'react-icons/fa';

  const Hero = props => (
    <header className="header intro">
      <Img
         title="Header image"
         alt="Hero banner"
         sizes={props.headerImage.sizes}
         style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
       />
       <div className="container intro-body">
         <div className="row justify-content-center">
           <div className="col-md-12">
             <h1 className="brand-heading">{props.heading}</h1>
             <p className="intro-text">{props.text}</p>
             <DownArrow href="#about" aria-label="about Banqee">
                 <FaAngleDoubleDown />
              </DownArrow>
           </div>
         </div>
       </div>

    </header>
  );

  export default Hero
