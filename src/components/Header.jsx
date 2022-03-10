import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <span onClick={() => window.scroll(0, 0)} className='header'>Movie App Project</span>
    </div>
  )
}

export default Header