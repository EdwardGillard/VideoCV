import React from 'react'
import { getAllVideos } from '../../lib/api'
import useFetch from '../../utils/useFetch'
import { categoryFilter } from '../../utils/multiUseFunctions'
import { Link } from 'react-router-dom'

function Projects() {
  const { data: videos, loading, refetchData } = useFetch(getAllVideos)

  if (!videos) return null

  //! Use Imported filter function to only return personal videos.
  const personalVideos = categoryFilter(videos, true)
  console.log(personalVideos)

  return (
    <div className="page">
      {loading ?
        <div>
          <h1>Loading.</h1>
        </div> :
        (personalVideos.length < 1) ? <h1>No users </h1>
          :
          <div className="all-users-wrapper">
            {personalVideos.map(vid => (
              <Link to={`/video/${vid._id}`} key={vid._id} className="user-card">
                <img src={vid.thumbnail} alt='thumbnail of video' />
                <h3>{vid.title}</h3>
                <h4>Content created by {vid.user.userName}</h4>
              </Link>
            ))}
          </div>}
    </div>
  )
}



export default Projects