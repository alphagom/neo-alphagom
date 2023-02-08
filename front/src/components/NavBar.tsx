import React, { useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Item, Separator, useContextMenu } from 'react-contexify'
import LoginModal from './modals/LoginModal'
import './NavBar.scss'
import 'react-contexify/dist/ReactContexify.css'
import logo from '../assets/devgom.png'
import title from '../assets/title.png'
import UserIcon from './UserIcon'

const MENU_ID = 'menu-id'

function NavBar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  const { show } = useContextMenu({
    id: MENU_ID,
  })

  // DropDown Menu Event Func
  function displayMenu(e: React.MouseEvent) {
    show({
      event: e,
    })
    return e
  }

  // Show DropDown Menu Handler
  const clickProfileHandler = (e: React.MouseEvent) => {
    displayMenu(e)
  }

  // Login Modal Func
  const loginModalHandler = useCallback(() => {
    setIsLoginModalOpen(!isLoginModalOpen)
  }, [isLoginModalOpen])

  return (
    <div className="navbar">
      {/* Context Menu */}
      <Menu id={MENU_ID}>
        <Item>좋아요한 포트폴리오</Item>
        <Item>저장한 포트폴리오</Item>
        <Item onClick={() => navigate(`/myportfolio`)}>내 포트폴리오</Item>
        <Item>계정 설정</Item>
        <Separator />
        {/* 로그인 모달 띄우기 */}
        <Item onClick={loginModalHandler}>로그인</Item>
      </Menu>

      {/* Login Modal */}
      {isLoginModalOpen && <LoginModal loginModalHandler={loginModalHandler} />}

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
      </div>
      <button
        className="nav-dropdown-btn"
        type="button"
        onClick={clickProfileHandler}
      >
        <UserIcon />
      </button>
    </div>
  )
}

export default NavBar
