import React from 'react'
import './header.css'
import Logo from '../Logo/Logo'

const Header = (props) => {
    const text = 'Code Academy'
    const sum = '20'
  return (
    <header>
        <Logo logoName = {text} count = {sum}/>
        <nav>
          {
            props.navbar.length > 0 ? props.navbar.map((item,index) => {
                return(
                   <a href="" key = {index} > {item}</a>  
                )
            }) : 'No data'
          }  
        </nav>
    </header>
  )
}

export default Header