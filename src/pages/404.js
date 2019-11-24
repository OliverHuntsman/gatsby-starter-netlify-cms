import React from 'react'
import Layout from '../components/Layout'
import Video from '../components/video.js'

//unable to resolve a local video
//import brideVideo from '../video/brides.mp4'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        //unable to resolve a local video
        //videoSrcURL = "brideVideo"
        videoTitle="Here are some Happy brides to watch before you find what you want :)"
      />
    </div>
  </Layout>
)

export default NotFoundPage
