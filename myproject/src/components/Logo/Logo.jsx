import React from 'react'

const Logo = (props) => {
  return (
    <div className="logo">
        <a href="">{props.logoName} ({props.count})</a>
    </div>
  )
}

export default Logo