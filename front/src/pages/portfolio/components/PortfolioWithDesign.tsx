/* eslint react/no-array-index-key: 0 */

import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

// atom 과 selector import
import { pfItemsOrderState } from 'store/portfolioState'
// 사용할 type import
import { IporfolioItemsType } from 'store/portfolioType'

function PortfolioWithDesign() {
  // 인덱스 순서가 담긴 atom과 selector을 선언
  const [pfItemsOrder, setPfItemsOrder] = useRecoilState(pfItemsOrderState)

  return (
    <div>
      <span>
        {/* idx 는 고유한 key 값으로 쓰면 안됨 (예외적인 상황 제외) 
        여기서는 순서가 변경될 때마다 바뀌어야하므로 idx 로 key 값 지정 */}
        {pfItemsOrder.map((item: IporfolioItemsType, idx) => (
          <div key={idx}>
            <item.itemForm />
            <item.itemDesign />
            <br />
          </div>
        ))}
      </span>
    </div>
  )
}

export default PortfolioWithDesign
