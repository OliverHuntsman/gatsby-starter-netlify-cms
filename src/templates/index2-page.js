import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Zoom from 'react-reveal'

import Layout from '../components/Layout'
import FeaturesI from '../components/FeaturesI'
import BlogRoll from '../components/BlogRoll'

 
export const Index2PageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
      {/* <div className="full-width-image-container margin-top-0"> */}
      {/* <section className = "banner-height"> */}
      <div className = "column">
      <div className ="columns">
    <div className = "column is-half banner-height"
       alt="gorgeous bride and her party"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top`,
        //backgroundAttachment: `fixed`,
        backgroundWidth: '50%',
        backgroundHeight: '1080px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
      }}
    >
        </div>
       {/* <div className = "logo-container">
        <img src = "/img/Gemma-Profile-pic-with-CoCo.png" className = "logo-float box-bounce ball"/>
        </div>  */}
      <div className = "column is-half "
        // pulled out this style as columns were laying on top of each other 
        //style={{
        //   display: 'flex',
        //   height: '150px',
        //   lineHeight: '1',
          //justifyContent: 'space-around',
          //alignItems: 'left',
          //flexDirection: 'column',
        //}}
      ><Zoom duration={500000}>
        <div className="flex-center">
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            //boxShadow:
              //'rgb(224, 200, 141) 0.5rem 0px 0px, rgb(224, 200, 141) -0.5rem 0px 0px',
            //backgroundColor: 'rgb(224, 200, 141)',
            color: 'grey',
            lineHeight: '1',
            padding: '0.25em',
            fontFamily: 'Roboto',
            //textAlign: 'center',
            //alignItems: 'center',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            //boxShadow:
              //'rgb(224, 200, 141) 0.5rem 0px 0px, rgb(224, 200, 141) -0.5rem 0px 0px',
            //backgroundColor: 'rgb(224, 200, 141)',
            color: 'grey',
            lineHeight: '1',
            padding: '0.25em',
            textAlign: 'center',
          }}
        >
          {subheading}
        </h3>
        </div>
        </Zoom>
        
      </div>

    </div>
    {/* </section> */}

    
    </div>
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
                </div >
                <FeaturesI gridItems={intro.blurbs} />
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

Index2PageTemplate.propTypes = {
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

const Index2Page = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Index2PageTemplate
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

Index2Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Index2Page

export const pageQuery = graphql`
  query Index2PageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index2-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid( maxWidth: 800, quality:100) {
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
                fluid(maxWidth: 500, quality: 100){
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
