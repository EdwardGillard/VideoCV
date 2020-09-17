import React from 'react'
import video from 'video.js'

function videoShow() {
  return (
    <>

      <video
        id="my-player"
        className="video-js"
        controls
        autoPlay
        preload="auto"
        poster="//vjs.zencdn.net/v/oceans.png"
        data-setup='{}'>
        <source src={require('../../assets/tetris.mp4')} type="video/mp4"></source>
        <p className="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
          <a href="https://videojs.com/html5-video-support/">
      supports HTML5 video
          </a>
        </p>
      </video>
    </>
  )
}

export default videoShow