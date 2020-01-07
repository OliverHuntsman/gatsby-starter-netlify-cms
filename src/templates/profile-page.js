import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleBanner from '../components/PreviewCompatibleBanner'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProfilePageTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  banner,
  image,
  text,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
      <div className="has-text-centered ">
            
              <div className="profile-container" > 

                  
                  
                   
              
              <PreviewCompatibleBanner bannerInfo ={banner}/>
              <PreviewCompatibleImage  imageInfo={image} />
                  </div>    
                  
              
              
          
            
            
          </div>
          <p>{text}</p>
        
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
      
          </div>
        </div>
      </div>
    </section>
  )
}

ProfilePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  helmet: PropTypes.object,
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const ProfilePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProfilePageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
banner={post.frontmatter.banner}
        text={post.frontmatter.text}
        image={post.frontmatter.image}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        
      />
    </Layout>
  )
}

ProfilePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
  }),
}
 
export default ProfilePage
//the $id in blog post is the name of the blog wich programatically creates the page - no need for sub folders - check the tutorial
export const pageQuery = graphql`
  query ProfilePageTemplate {
    markdownRemark(frontmatter: {templateKey:{ eq: "profile-page" }}) {
      id
      html
      frontmatter {
        title
        description
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

      }
    }
  }
`


