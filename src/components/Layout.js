import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../components/Layout.css'
import '../components/Banqee.css'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <base href={`${withPrefix('/')}`} />
        
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
       <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />

        <link
          href={`${withPrefix('/')}css/vendor-min.css`}
          type="text/css"
          rel="stylesheet"
        />

       <link
        href={`${withPrefix('/')}css/banqee-min.css`}
        type="text/css"
        rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      <main>
      {children}
      <Footer />
      </main>

    <script
    type="text/javascript"
    src={`${withPrefix('/')}assets/js/lib.min.js`}
    />
    <script
    type="text/javascript"
    src={`${withPrefix('/')}assets/js/banqee.min.js`}
    />

    </div>
  )
}

export default TemplateWrapper
