import React from 'react'
import PorfolioItemBar from './components/PortfolioItemBar'
import PortfolioWithDesign from './components/PortfolioWithDesign'

function PortfolioPage() {
  return (
    <div style={{ display: 'flex' }}>
      <PorfolioItemBar />
      <PortfolioWithDesign />
    </div>
  )
}

export default PortfolioPage
