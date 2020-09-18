import React from 'react'
import useFetch from '../../utils/useFetch'
import { getAllUsers } from '../../lib/api'
import { Link } from 'react-router-dom'
import { capitalize, profileImageChecker } from '../../utils/multiUseFunctions'


function AllUsers() {
  const { data: users, errors, loading, refetchData } = useFetch(getAllUsers)

  if (!users) return null

  //! Filter to display only Jobseekers
  const allSeekers = users.filter(user => user.jobseeker)
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
                <div>{profileImageChecker(user)}</div>
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