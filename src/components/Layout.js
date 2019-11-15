import React from 'react'
import { Helmet } from 'react-helmet'
import './all.sass'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/vendor-min.css'
import '../css/banqee-min.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
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
    rel="stylesheet"
    type="text/css"
    href={`${withPrefix('/')}assets/css/vendor-min.css`}
    >
    <link
    rel="stylesheet"
    type="text/css"
    href={`${withPrefix('/')}assets/css/banqee-min.css`}
    >
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <main>
      <div>{children}</div>
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
