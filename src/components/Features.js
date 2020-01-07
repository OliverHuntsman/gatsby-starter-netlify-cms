import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import PreviewCompatibleBanner from '../components/PreviewCompatibleBanner'
import {Link} from 'gatsby'
import {IoIosArrowForward} from 'react-icons/io'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered ">
            <Link to= "/profiles/Olly">
              <div className="profile-container" > 

                  
                  
                   
              
              <PreviewCompatibleBanner bannerInfo ={item.banner}/>
              <PreviewCompatibleImage  imageInfo={item.image} />
                  </div>    
                  
                  Meet {item.name} <IoIosArrowForward  style= {{verticalAlign:'-0.1875em', text:'bold' }}/> 
              
              
          </Link>
            
            
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      name: PropTypes.string,
    })
  ),
}

export default FeatureGrid
