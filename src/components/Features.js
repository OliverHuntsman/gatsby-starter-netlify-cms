import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import PreviewCompatibleBanner from '../components/PreviewCompatibleBanner'
import {Link} from 'gatsby'
import {IoIosArrowForward} from 'react-icons/io'
//component to be used within a page template to display short profiles - the grid pulls from a separate markdown file, not the acual page
const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    
    {gridItems.map(item => (
     /* Proptyes are defined in the tenplate file
     item.text gets passed from the file this component is called in "item" is pulled fromt he prop type, in profiles-page.js this is blurbs

     */
     <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered ">
           {/* Link runs across the profile image and met text */}
            <Link to= {item.slug}> 
              <div className="profile-container" > 
              {/* Preview compatible banner companent is banner image */} 
                <PreviewCompatibleBanner bannerInfo ={item.banner}/>
                {/* Round profile image */}
                <PreviewCompatibleImage  imageInfo={item.image} />
              </div>    
                  {/* not totally happy about a p tag for a blnk line */}
                  <p></p> 
                  Meet {item.name} <IoIosArrowForward  style= {{verticalAlign:'-0.1875em', text:'bold' }}/> 
              
              </Link>
            
          </div>
          <p></p>
          <p>{item.text}</p>
          <Link className="button" to={item.slug}>
                    Keep Reading →
          </Link>
        </section>
      </div>
    ))}
  </div>
)
// Proptypes are passed in from the Template file that the component is called from
FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      name: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
}

export default FeatureGrid
