import React from 'react'
import PorfolioItemBar from './components/PortfolioItemBar'
import './PortfolioPage.css'
import PortfolioWithDesign from './components/PortfolioWithDesign'

function PortfolioPage() {
  return (
    <div className="portfolio-page" style={{ display: 'flex' }}>
      <PorfolioItemBar />
      <PortfolioWithDesign />
    </div>
  )
}

export default PortfolioPage
