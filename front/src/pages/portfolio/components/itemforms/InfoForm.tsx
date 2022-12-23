import React from 'react'
import '../itemdesigns/base/Base.scss'
import BaseItemTitle from '../itemdesigns/itemdesignsbaseitem/BaseItemTitle'
import ItemContentInputShort from './itemformsitem/ItemContentInputShort'

function InfoForm() {
  return (
    <div>
      <div className="base-title">기본정보 입력 폼</div>
      <div className="base-card">
        <div className="base-item-profile">
          <img
            src="https://img.insight.co.kr/static/2020/09/02/700/98j4263429d06416wy82.jpg"
            alt=""
          />
        </div>
        <div className="base-item">
          <BaseItemTitle titleValue="학교" />
          <ItemContentInputShort
            inputValue=""
            inputPlaceholder="학교 이름을 입력하세요"
          />
        </div>
      </div>
    </div>
  )
}

export default InfoForm
