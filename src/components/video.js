import React from "react"
const Video = ({ videoSrcURL,  videoTitle, ...props }) => (
  <div className="video">
    <iframe
    style ={{width : '75%', height : '500px'}}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen

    />
  </div>
)
export default Video