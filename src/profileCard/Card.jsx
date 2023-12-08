import React from 'react'
import Button from '../button/Button'
import './card.css'

const Card = ({img, profileName, designation, following, followers, posts}) => {
  return (
    <div className="profile-card">

          <div className="image">
            <img src={img} alt="not found" className="profile-pic"/>
          </div>

          <div className="data">
            <h2>{profileName}</h2>
            <span>{designation}</span>
          </div>

          <div className="row">
            <div className="info">
              <h3>Following</h3>
              <span>{following}</span>
            </div>

            <div className="info">
              <h3>Followers</h3>
              <span>{followers}</span>
            </div>

            <div className="info">
              <h3>Posts</h3>
              <span>{posts}</span>
            </div>
          </div>

          <div className="buttons">
          <Button href='#' className="btn" text="Message"/>
          <Button href='#' className="btn" text="Follow Me"/>
          </div>
          
        </div>
  )
}

export default Card