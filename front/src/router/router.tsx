import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainPage from 'pages/main/MainPage'
import PortfolioPage from 'pages/portfolio/PortfolioPage'
import MyportfolioPage from 'pages/myportfolio/MyportfolioPage'

const router = createBrowserRouter([
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
])

export default router
