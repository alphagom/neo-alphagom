import React, { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Item, Separator, useContextMenu } from 'react-contexify'
import './NavBar.scss'
import 'react-contexify/dist/ReactContexify.css'
import logo from '../assets/devgom.png'
import title from '../assets/title.png'
import UserIcon from './UserIcon'

const MENU_ID = 'menu-id'

function NavBar() {
  // 드롭다운 포지션 고정하려그랬는데 굳이 필요할까?
  // const [btnNodeLeft, setBtnNodeLeft] = useState<number>(0)
  // const [btnNodeTop, setBtnNodeTop] = useState<number>(0)
  // const triggerBtnRef = useRef<HTMLButtonElement>(null)
  // useEffect(() => {
  //   if (triggerBtnRef.current) {
  //     setBtnNodeLeft(triggerBtnRef.current.getBoundingClientRect().left)
  //     setBtnNodeTop(triggerBtnRef.current.getBoundingClientRect().top)
  //     console.log(btnNodeLeft)
  //     console.log(btnNodeTop)
  //   }
  // }, [btnNodeLeft, btnNodeTop, triggerBtnRef])

  const navigate = useNavigate()

  const { show } = useContextMenu({
    id: MENU_ID,
  })

  function displayMenu(e: React.MouseEvent) {
    show({
      event: e,
      // 포지션 안 정하면 클릭한 곳 아래에 메뉴 뜬다

      // position: {
      //  // 이 위치 창 크기 바뀌면 안 먹히는데 와이,,
      //   x: btnNodeLeft + 20,
      //   y: btnNodeTop + 70,
      // },
    })
    return e
  }

  const clickProfileHandler = (e: React.MouseEvent) => {
    displayMenu(e)
    // console.log(btnNodeLeft)
    // console.log(btnNodeTop)
  }
  return (
    <div className="navbar">
      {/* Context Menu */}
      <Menu id={MENU_ID}>
        <Item onClick={() => navigate(`/myportfolio`)}>내 포트폴리오</Item>
        <Separator />
        {/* 로그인 모달 띄우기 */}
        <Item onClick={() => navigate(`/myportfolio`)}>내 포트폴리오</Item>
      </Menu>

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
        // ref={triggerBtnRef}
        onClick={clickProfileHandler}
      >
        <UserIcon />
      </button>
    </div>
  )
}

export default NavBar
