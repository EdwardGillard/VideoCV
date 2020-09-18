import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import { getSingleUser } from '../../lib/api'
import { capitalize, categoryFilter, profileImageChecker } from '../../utils/multiUseFunctions'

function GetSingleUser() {
  const params = useParams()
  const { data: user, errors, loading } = useFetch(getSingleUser, params.username)

  if (!user) return null

  return (
    <>
      {loading ? <div> Loading </div> :

        <div className="page">
          <div className="dashboard-top">
            <div className="section-one">
              <div className="profile-image">
              <div>{profileImageChecker(user)}</div>
              </div>
              <div className="intro">
                <h1>{capitalize(user.userName)}</h1>
              </div>
            </div>

            <div className="section-two">
              <h3>{user.tagLine}</h3>
              <h6>Portfolio: {user.portfolio} </h6>
              <h6>Github: {user.github}</h6>
              <h6>LinkedIn: {user.linkedIn} </h6>
              <h6>Bio:</h6>
              <p> {user.bio} </p>
            </div>
          </div>

          <div className="videos-wrapper">
            <h1> {capitalize(user.userName)}'s Videoes </h1>
            <div className="videos">
              <div className="category-wrapper">
                <h2>Projects:</h2>
              </div>
              <div className="video-thumbs-wrapper">
                {categoryFilter(user.createdVideos, true).length >= 1 ?
                  <div className="video-thumbs-wrapper">
                    {categoryFilter(user.createdVideos, true).map(vid => (
                      <div key={vid._id} className="video-thumb-cards">
                        <h4>{vid.title}</h4>
                        <img src={vid.thumbnail} alt={vid.title} />
                      </div>
                    ))}
                  </div> :

                  <div className="no-vids">
                    <p>No Videos</p>
                  </div>}
              </div>
            </div>
            <div className="videos">
              <div className="category-wrapper">
                <h2> Personal: </h2>
              </div>
              <div className="video-thumbs-wrapper">
                {categoryFilter(user.createdVideos, false).length >= 1 ?
                  <div className="video-thumbs-wrapper">
                    {categoryFilter(user.createdVideos, false).map(vid => (
                      <div key={vid._id} className="video-thumb-cards">
                        <h4>{vid.title}</h4>
                        <img src={vid.thumbnail} alt={vid.title} />
                      </div>
                    ))}
                  </div> :

                  <div className="no-vids">
                    <p>No Videos</p>
                  </div>}
              </div>
            </div>
          </div>
        </div>}
    </>
  )
}

export default GetSingleUser