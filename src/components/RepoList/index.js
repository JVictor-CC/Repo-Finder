import React from 'react'
import './style.css'

const RepoList = ({title, description}) => {
  return (
    <div className='repo-list'>
        <h1>{title}</h1>
        <p>{description}</p>
        <hr/>
    </div>

  )
}

export default RepoList