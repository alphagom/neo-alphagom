/* eslint react/no-array-index-key: 0 */

import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

// atom 과 selector import
import { pfItemsOrderState } from 'store/portfolioState'
// 사용할 type import
import { PorfolioItemsType } from 'store/portfolioType'

function PortfolioItemBar() {
  // 인덱스 순서가 담긴 atom과 selector을 선언
  const [pfItemsOrder, setPfItemsOrder] = useRecoilState(pfItemsOrderState)

  /** 순서 바뀌는 함수
   * 최종 저장 버튼 때 type order 프로퍼티로 순서 저장해두면 된다
   * 상세 페이지서 조회시 : 순서대로 sort 해서 띄우기
   * */
  const changeOrder = (num1: number, num2: number) => {
    // 변경할 인덱스 배열 복사
    const changePfItems = [...pfItemsOrder]
    ;[changePfItems[num1], changePfItems[num2]] = [
      changePfItems[num2],
      changePfItems[num1],
    ]
    setPfItemsOrder(changePfItems)
  }

  // 드래그 시 선택된 항목의 index
  const [isSelected, setIsSelected] = useState<number>(0)

  // 드래그 dnd 함수
  const dragFunction = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.dataTransfer.effectAllowed = 'move'
  }

  const dropFunction = (
    e: React.DragEvent<HTMLDivElement>,
    idx: number,
    selectedIdx: number
  ) => {
    changeOrder(selectedIdx, idx)
  }

  const dragStartFunction = (
    e: React.DragEvent<HTMLDivElement>,
    idx: number
  ) => {
    e.dataTransfer.effectAllowed = 'move'
    setIsSelected(idx)
  }

  return (
    <div>
      <span>
        {/* idx 는 고유한 key 값으로 쓰면 안됨 (예외적인 상황 제외) 
        여기서는 순서가 변경될 때마다 바뀌어야하므로 idx 로 key 값 지정 */}
        {pfItemsOrder.map((item: PorfolioItemsType, idx) => (
          <div
            onDragOver={(event) => dragFunction(event)}
            onDrop={(event) => dropFunction(event, isSelected, idx)}
            onDragEnter={(event) => dragFunction(event)}
            onDragLeave={(event) => dragFunction(event)}
            onDragStart={(event) => dragStartFunction(event, idx)}
          >
            <p key={idx} draggable>
              {item.mustHave && <span>*</span>}
              {item.itemTitle}
            </p>
          </div>
        ))}
      </span>
    </div>
  )
}
export default PortfolioItemBar
