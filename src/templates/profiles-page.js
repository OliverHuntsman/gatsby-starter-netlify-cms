import React from 'react'
import PropTypes from 'prop-types'
import {  graphql } from 'gatsby'
import Zoom from 'react-reveal'
import ProfileRoll from '../components/ProfileRoll'
import Layout from '../components/Layout'
import Features from '../components/Features'


export const ProfilesPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  slug,
  intro,
}) => (
  <div>
    <div
      className="full-width-image-container margin-top-0" alt="gorgeous bride and her party"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top`,
        //backgroundAttachment: `fixed`,
        backgroundWidth: '100%',
      }}
    > 
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      ><Zoom duration={50000}>
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            //boxShadow:
              //'rgb(224, 200, 141) 0.5rem 0px 0px, rgb(224, 200, 141) -0.5rem 0px 0px',
            //backgroundColor: 'rgb(224, 200, 141)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            align: 'center',
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
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3></Zoom>
      </div>
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

               <div className="columns is-vcentered">
                 <div className="column">
                
                   <p>This is some text</p>
                 </div>
                </div> 
                <Features gridItems={intro.blurbs} />
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   <section className="section">
          <div className="container">
            <div className="content">
              <ProfileRoll />
            </div>
          </div>
        </section> 
  </div>
)

ProfilesPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    slug: PropTypes.string,
    intro: PropTypes.shape({
      blurbs: PropTypes.array,
    }),
  }
  
  const ProfilesPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <ProfilesPageTemplate
          image={frontmatter.image}
          title={frontmatter.title}
          heading={frontmatter.heading}
          subheading={frontmatter.subheading}
          mainpitch={frontmatter.mainpitch}
          description={frontmatter.description}
          intro={frontmatter.intro}
          slug={frontmatter.slug}
        />
      </Layout>
    )
  }

ProfilesPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }


export default ProfilesPage

export const pageQuery = graphql`
  query ProfilesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "profiles-page" } }) {
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
            banner {
              childImageSharp {
                fluid(maxWidth: 500, quality:100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image {
              childImageSharp {
                fluid(maxWidth: 150, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            slug
            name
          
          }
          heading
          description
        }
      }
    }
  }
`
