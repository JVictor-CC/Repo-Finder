import React from 'react'
import './style.css'
import { useCallback } from 'react'

const Input = ({inputLabel, buttonLabel, user, onChangeUser, buttonFunction}) => {

  const handleInputChange = useCallback(event => {
    onChangeUser(event.target.value)
  }, [onChangeUser])


  return (
    <div className="search-container">
      <input type="text" name="searchbar" value={user} onChange={handleInputChange} className='search-bar' placeholder={inputLabel}/>
      <button onClick={buttonFunction}>{buttonLabel}</button>
    </div>
    
  )
}

export default Input