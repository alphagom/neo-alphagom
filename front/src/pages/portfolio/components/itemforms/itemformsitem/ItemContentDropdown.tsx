import BtnSmallShort from 'components/buttons/BtnSmallShort'
import React, { useState } from 'react'

// 드랍다운 내용과 placeholder props 로 받기
function ItemContentDropdown({
  DropdownContent,
  setGetSelected,
  getSelected,
}: {
  DropdownContent: Array<number | string>
  setGetSelected(value: number | string): void
  getSelected: number | string
}) {
  // 드랍다운 visibility 여부와 선택된 항목 표시하기
  const [dropdownShow, setDropdownShow] = useState(false)

  const ShowDropdown = (value: boolean) => {
    setDropdownShow(!dropdownShow)
    return value
  }

  return (
    <div>
      <BtnSmallShort
        BtnName={getSelected}
        doFunction={() => ShowDropdown(true)}
      />
      {dropdownShow &&
        DropdownContent.map((item) => (
          <div
            key={item}
            onClick={() => {
              setDropdownShow(!dropdownShow)
              setGetSelected(item)
            }}
            role="presentation"
          >
            {item}
          </div>
        ))}
    </div>
  )
}

export default ItemContentDropdown
