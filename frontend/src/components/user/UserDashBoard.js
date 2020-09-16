import React from 'react'
import { userDash } from '../../lib/api'
import useFetch from '../../utils/useFetch'

function UserDashBoard() {
  const { data: user, loading, error, refetchData } = useFetch(userDash)

  if (!user) return null
  console.log(user)

  const capitalize = () => {
    return user.userName[0].toUpperCase() + user.userName.slice(1).toLowerCase()
  }

  const projectVideos = () => {
    return user.createdVideos.filter(vid => vid.project)
  }

  const personalVideos = () => {
    return user.createdVideos.filter(vid => !vid.project)
  }

  console.log(personalVideos().length)
  console.log(user.createdVideos.length)
  console.log(projectVideos().length)

  return (
    <>
      {loading ? <div> Loading </div> :
        <div>
          <h1> Hi {capitalize()} </h1>
          <div>
            <h3>{user.tagLine}</h3>
            <h6>Portfolio: {user.portfolio} </h6>
            <h6>Github: {user.github}</h6>
            <h6>LinkedIn: {user.linkedIn} </h6>
            <h6>Bio:</h6>
            <p> {user.bio} </p>
          </div>
          <div>
            <h1> {capitalize()}'s Videoes </h1>
            <div>
              {user.createdVideos.length >= 1 ?
                <div className="videos-wrapper">
                  <div className="video-thumbs-wrapper">
                    <h3>Projects:</h3>
                    {projectVideos().map(vid => (
                      <div key={vid._id}>
                        <h3>{vid.title}</h3>
                        <img src={vid.thumbnail}/>
                      </div>
                    ))}
                  </div>
                  <div className="video-thumbs-wrapper">
                    <h3> Personal: </h3>
                    {personalVideos().map(vid => (
                      <div key={vid._id} className="video-thumb-cards">
                        <h3>{vid.title}</h3>
                        <img src={vid.thumbnail}/>
                      </div>
                    ))}
                  </div>
                </div>
                :
                <div>
                  <p> Upload a video</p>
                </div>}
            </div>
          </div>
        </div>}
    </>
  )
}



export default UserDashBoard