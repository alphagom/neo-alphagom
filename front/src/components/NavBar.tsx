import React, { useState, ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div className="temp-navbar">
    <Link to="/" className="nav-items">
        <div>홈</div>
      </Link>
    <Link to="/portfolio" className="nav-items">
        <div>포트폴리오 만들기</div>
      </Link>
    <Link to="/myportfolio" className="nav-items">
        <div>내 포트폴리오</div>
      </Link>
    </div>
  )
}

export default NavBar
