import React from 'react'
import { useParams } from 'react-router-dom'
import video from 'video.js'
import { getSingleVideo } from '../../lib/api'
import useFetch from '../../utils/useFetch'

function VideoShow() {
  const params = useParams()
  console.log(params)
  // const { data: videos, loading, refetchData } = useFetch(getSingleVideo())

  // console.log(video)

  return (
    <>
    <h1>Hello world</h1>

      {/* <video
        id="my-player"
        className="video-js"
        controls
        autoPlay
        preload="auto"
        poster="//vjs.zencdn.net/v/oceans.png"
        data-setup='{}'>
        <source src={video} type="video/mp4"></source>
        <p className="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
          <a href="https://videojs.com/html5-video-support/">
      supports HTML5 video
          </a>
        </p>
      </video> */}
    </>
  )
}

export default VideoShow