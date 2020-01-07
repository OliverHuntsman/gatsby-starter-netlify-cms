import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const PreviewCompatibleBanner = ({ bannerInfo }) => {
  const bannerStyle = { 
    borderRadius: '15px',
    height: '200px',
    width: '100%',
    //backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
  
  }
  const { alt ='', childImageSharp, image } = bannerInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <BackgroundImage style={bannerStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <BackgroundImage style={bannerStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <BackgroundImage style={bannerStyle} src={image} alt={alt} />

  return null
}

PreviewCompatibleBanner.propTypes = {
  bannerInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleBanner