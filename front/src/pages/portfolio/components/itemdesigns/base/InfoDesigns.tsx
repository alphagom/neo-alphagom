import React from 'react'
import './Base.scss'

function InfoDesign() {
  return (
    <div>
      <div className='base-title'>기본정보 디자인 폼</div>
      <div className='base-card'>
        <div className='base-item-profile'>
          <img src="https://img.insight.co.kr/static/2020/09/02/700/98j4263429d06416wy82.jpg" alt="" />
        </div>
        <div className='base-item'>
          <div className='base-item-title'>이름</div>
          <div className='base-item-content'>내용</div>
        </div>
      </div>
    </div>)
}

export default InfoDesign
