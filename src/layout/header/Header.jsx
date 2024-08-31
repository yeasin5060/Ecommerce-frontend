import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header id='header'>
      <div className='container'>
        <div className='header-content-wrapper'>
          <h4 className='header-contant'> Due to the<span className='header-unique-contant'> Covid 19</span> epidemic , Order my be processed with a slight delay</h4>
        </div>
      </div>
    </header>
  )
}

export default Header