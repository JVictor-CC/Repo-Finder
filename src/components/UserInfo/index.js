import React from 'react'
import './style.css'

const UserInfo = ({profilePic, profileName, profileDesc, profileLogin}) => {
  return (
    <div className="user-info">
        <img className="profile-pic" src={profilePic} alt="Profile pic"/>
        <div>
            <h3>{profileName}</h3>
            <span>{profileLogin}</span>
            <p>{profileDesc}</p>
        </div>
    </div>
  )
}

export default UserInfo