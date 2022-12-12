import React from 'react'
import { Link } from 'react-router-dom'

// atom 을 사용하기 위해 recoil 라이브러리 import
import { useRecoilState } from 'recoil'

// 사용할 atom 과 type import
import { menuState } from 'store/state'
import { Menu } from 'store/type'

function NavBar() {
  /**
   * 이제 메뉴를 클릭할 때마다 atom 값을 바꿔서 색을 바꿔볼 겁니다
   *
   * 우선, useRecoilState 로 atom 값과 atom 값을 바꿀 수 있도록 만듭니다
   * 그 후, 클릭 시 색이 바뀌게 (atom 값이 변경되도록) 하고 싶으므로
   * onClick 이벤트에 setMenuColor 로 색을 바꿔줍니다
   *
   * 이 때, Menu 는 지정해 둔 enum 타입입니다
   * 실제로 누를 때마다 atom 값이 변경되며 색이 바뀌는 걸 확인할 수 있습니다
   */
  const [menuColor, setMenuColor] = useRecoilState(menuState)
  const tempStyle = {
    width: '300px',
    height: '100px',
    background: menuColor,
  }
  return (
    <div>
      <div style={tempStyle} />
      <Link to="/" onClick={() => setMenuColor(Menu.HOME)}>
        <h1>홈</h1>
      </Link>
      <Link to="/portfolio" onClick={() => setMenuColor(Menu.PORTFOLIO)}>
        <h1>포트폴리오 만들기</h1>
      </Link>
      <Link to="/myportfolio" onClick={() => setMenuColor(Menu.MYPORTFOLIO)}>
        <h1>내 포트폴리오</h1>
      </Link>
    </div>
  )
}

export default NavBar
