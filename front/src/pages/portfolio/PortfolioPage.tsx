import React from 'react'
import PorfolioItemBar from './components/PortfolioItemBar'
import PortfolioWithDesign from './components/PortfolioWithDesign'
import './PortfolioPage.scss'

function PortfolioPage() {
  return (
    <div className="portfolio-page" style={{ display: 'flex' }}>
      <PorfolioItemBar />
      <PortfolioWithDesign />
    </div>
  )
}

export default PortfolioPage
