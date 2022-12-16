import React, { useState, ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div>
      <Link to="/">
        <h3>홈</h3>
      </Link>
      <Link to="/portfolio">
        <h3>포트폴리오 만들기</h3>
      </Link>
      <Link to="/myportfolio">
        <h3>내 포트폴리오</h3>
      </Link>
    </div>
  )
}

export default NavBar
