import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

import MainPage from 'pages/main/MainPage'
import PortfolioPage from 'pages/portfolio/PortfolioPage'
import MyportfolioPage from 'pages/myportfolio/MyportfolioPage'
import NavBar from 'components/NavBar'

/**
 * Router, Routes 로 감싸는 대신 RouteProvider 사용 시
 * element 에 명시해줘야 링크 가능
 */
const router = createBrowserRouter([
  {
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/myportfolio',
        element: <MyportfolioPage />,
      },
    ],
  },
])

export default router
