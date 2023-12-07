
import React from 'react'
import './welcomemessage.css'

const WelcomeMessage = (props) => {
  return (
    <div className='main-div'>
        <h1>Xoş gəlmişsiniz: {props.username}</h1>
    </div>
  )
}

export default WelcomeMessage