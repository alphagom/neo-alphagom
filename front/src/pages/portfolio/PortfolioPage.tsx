import React from 'react'
import PorfolioItemBar from './components/PortfolioItemBar'
import PortfolioWithDesign from './components/PortfolioWithDesign'
import DesignRecommendBar from './components/DesignRecommendBar'
import './PortfolioPage.scss'

function PortfolioPage() {
  return (
    <div className="portfolio-page" style={{ display: 'flex' }}>
      <PorfolioItemBar />
      <PortfolioWithDesign />
      <DesignRecommendBar />
    </div>
  )
}

export default PortfolioPage
