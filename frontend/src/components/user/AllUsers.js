import React from 'react'
import useFetch from '../../utils/useFetch'
import { getAllUsers } from '../../lib/api'
import { Link } from 'react-router-dom'
import { capitalize } from '../../utils/multiUseFunctions'


function AllUsers() {
  const { data: users, errors, loading, refetchData } = useFetch(getAllUsers)

  if (!users) return null

  //! Filter to display only Jobseekers
  const allSeekers = users.filter(user => user.jobseeker)
  console.log('its not broken')
  console.log(allSeekers)

  return (
    <>
      <div className="page">
        {loading ?
          <div>
          No users
          </div> :
          <div className="all-users-wrapper">
            {allSeekers.map(user => (
              <Link to={`/${user.userName}`} key={user._id} className="user-card">
                <h5>{capitalize(user.userName)}</h5>
                {user.profileImg ? 
                  <img src={user.profileImg} alt="profile picture" height="200px" width="200px"/>
                  : (user.gender === 'Male') ? 
                    <img src={require('../../assets/Male.png')} alt="Male" height="200px" width="200px"/>
                    : 
                    <img src={require('../../assets/Female.png')} alt="Female" height="200px" width="200px"/>}
                <p>{capitalize(user.userName)} has {user.createdVideos.length} videos </p>
              </Link>
            ))}
          </div>
        }
      </div>
    </>
  )
}

export default AllUsers