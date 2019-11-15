import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'cloudinary'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({

  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
  <header 
  className="header app-landing-2-header section"
  >
  <div 
  className="shapes-container"
  >
  <div 
  className="shape shape-animated aos-init aos-animate" 
  data-aos="fade-down-right" 
  data-aos-duration="1500" 
  data-aos-delay="100"
  >
  </div>
  <div className="shape shape-animated aos-init aos-animate" 
  data-aos="fade-down" 
  data-aos-duration="1000" 
  data-aos-delay="100"
  >
  </div>
  <div 
  className="shape shape-animated aos-init aos-animate" 
  data-aos="fade-up-left" 
  data-aos-duration="500" 
  data-aos-delay="200"
  >
  </div>
  <div 
  className="shape shape-animated aos-init aos-animate" 
  data-aos="fade-up" 
  data-aos-duration="500" 
  data-aos-delay="200"
  >
  </div>
  
  <div 
  className="animation-shape shape-triangle"
  >
  <div 
  className="animation--rotating"
  >
  </div>
  </div>
  <div 
  className="animation-shape shape-cross"
  >
  <div 
  className="animation--rotating"
  >
  </div>
  </div>
   <div 
  className="static-shape shape-ring shape-ring-1"
>
  <div
  className="animation animation--rotating"
  >
  </div>
  </div>
  <div 
  className="static-shape shape-ring shape-ring-2"
  >
  <div 
  className="animation animation--rotating-clockwise"
  >
  </div>
  </div>
  <div 
  className="static-shape pattern-dots-1"
  >
  </div>
  <div 
  className="static-shape pattern-dots-2"
  >
  </div>
  <div 
  className="static-shape background-shape-main"
  >
  </div>
  </div>
  <div 
  className="container"
  >
  <div 
  className="row align-items-center gap-y"
  >
  <div 
  className="col-md-6"
  >
  <span 
  className="rounded-pill shadow-box bg-contrast text-dark bold py-2 px-4"
  >
  <i 
  className="far fa-lightbulb text-primary mr-2"
  >
  </i> 
  <span 
  className="text-primary">
  Awesome
  </span> 
  Landing Page
  </span>
  <h1 
  className="display-4 display-md-2 mt-3"
  style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
  >
  <span 
  className="bold"
  >
   {title}
  </span>
  </h1>
  <p 
  className="lead bold text-primary"
  style={{
            color: 'blue',
            lineHeight: '1',
            padding: '0.25em',
          }}
  >
  Premium Startup &amp; 
  <span 
  className="head-line-2"
  >
  App Landing Page
  </span>
  </p>
  <p 
  className="lead"
    style={{
            color: 'blue',
            lineHeight: '1',
            padding: '0.25em',
          }}
  >
   {subheading}
  </p>
  <div 
  className="hero-form shadow-lg"
  >
  <form 
  action="https://api.banqee.com/v1/register.php" 
  novalidate="novalidate"
  >
  <div 
  className="input-group"
  >
  <input 
  type="text" 
  className="form-control" 
  placeholder="Your Email"
  > 
  <button 
  type="submit" 
  className="btn btn-primary more-link"
  >
  Subscribe Now
  </button>
  </div>
  </form>
  </div>
  </div>
  <div 
  className="col-md-6"
  >
  <div className="iphone-x light front">
  <div className="screen shadow-box">
<Image publicId="Banqee/iphone-display.png" >

</Image>
  </div>
  <div 
  className="notch"
  >
  </div>
  </div>
  </div>
  </div>
  </div>
  </header>
    
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
