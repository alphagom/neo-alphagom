import React, { useState, ComponentProps } from 'react'
import { Link } from 'react-router-dom'

// atom 을 사용하기 위해 recoil 라이브러리 import
import { useRecoilState } from 'recoil'

// 사용할 atom 과 type import
import { menuState } from 'store/state'
import { Menu } from 'store/type'

// 로그인 api, url import
import { login } from 'api/authApi'
import { loginUrl } from 'api/url'

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

  // 로그인 테스트 코드를 위한 상태 지정
  const [token, setToken] = useState('')

  const [myid, setMyId] = useState('')
  const [mypw, setMyPw] = useState('')

  const onIdHandler: ComponentProps<'input'>['onChange'] = (event) => {
    setMyId(event.currentTarget.value)
  }
  const onPwHandler: ComponentProps<'input'>['onChange'] = (event) => {
    setMyPw(event.currentTarget.value)
  }

  const onSubmitHandler = (event: React.FormEvent) => {
    // 버튼만 누르면 리프레시 되는것을 막아준다
    event.preventDefault()
    const body = {
      id: myid,
      pw: mypw,
    }
    const getData = () =>
      login(loginUrl, body).then((data) => {
        console.log(data)
        setToken(data.token)
      })
    getData()
    setMyId('')
    setMyPw('')
  }

  return (
    <div>
      {/* atom 사용법 (임시) */}
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

      {/* 로그인 폼 (임시) */}

      <p>MainPage</p>
      <form onSubmit={onSubmitHandler}>
        <input value={myid} placeholder="아이디 입력" onChange={onIdHandler} />
        <input
          value={mypw}
          placeholder="비밀번호 입력"
          onChange={onPwHandler}
        />
        <br />
        <button type="submit" formAction="">
          로그인
        </button>
      </form>

      <p>{token}</p>
    </div>
  )
}

export default NavBar
