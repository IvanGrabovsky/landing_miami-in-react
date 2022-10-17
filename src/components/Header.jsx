import React from 'react'

export const Header = () => {
  return (
    <header className='header'>
      <div className="header__nav">
        <button className="header__menu-opener">button</button>

        <a href="/" className="logo">
          <img src="images/logo.png" alt="Miami Condo Kings" />
        </a>

        <a href="tel:+1 234 555-55-55" className='header__call'>+1 234 555-55-55</a>
      </div>

      <h1 className="header__title">
        Miami
        <br />
        Condo Kings
      </h1>
    </header>
  )
}
