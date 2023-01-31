import React from 'react'
import './style.css'
import { VscRepoForked, VscStarEmpty, VscEye } from 'react-icons/vsc'

const RepoList = ({title, description, topics, user, stars, watchers, forks, language}) => {
  return (<>
    <div className='repo-list'>
      <div>
        <a target="_blank" href={`https://github.com/${user}/${title}`} className='repo-title' rel="noreferrer">{title}</a>
        <p className='repo-description'>{description}</p>
        <div className='topic-list'>
          {topics.map(topic => (<>
            <a className='topics' target="_blank" href={`https://github.com/topics/${topic}`} rel="noreferrer">{topic}</a>
          </>))}
        </div>
        <p className='repo-language'>Language: {language}</p>
      </div>
      <div>
        <div className='repo-info'><span><VscStarEmpty /></span><span>{stars}</span></div>
        <div className='repo-info'><span><VscRepoForked /></span><span>{forks}</span></div>
        <div className='repo-info'><span><VscEye /></span><span>{watchers}</span></div>
      </div>

    </div>
    <hr />
  </>)
}

export default RepoList