import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import logo from '../assets/devgom.png'
import title from '../assets/title.png'
import UserIcon from './UserIcon'

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <a href="/">
          <img src={logo} alt="devgom logo" width="155" />
        </a>
        <div className="navbar-menu">
          <a href="/">
            <img src={title} alt="devgom title" width="355" />
          </a>
          <div className="navbar-list">
            <Link to="/" className="nav-items">
              홈
            </Link>
            <div className="nav-item-line" />
            <Link to="/portfolio" className="nav-items">
              포트폴리오 만들기
            </Link>
            <div className="nav-item-line" />
            <Link to="/myportfolio" className="nav-items">
              내 포트폴리오
            </Link>
          </div>
        </div>
        <UserIcon />
      </div>
    </div>
  )
}

export default NavBar
