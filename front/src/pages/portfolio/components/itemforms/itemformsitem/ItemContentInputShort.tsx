import React from 'react'
import '../../itemdesigns/base/Base.scss'

type InputProps = {
  inputValue: string
  inputPlaceholder: string
}

function ItemContentInputShort({ inputValue, inputPlaceholder }: InputProps) {
  return (
    <div className="base-item-content">
      <input
        type="text"
        value={inputValue}
        placeholder={inputPlaceholder}
        className="base-item-content-input"
      />
    </div>
  )
}

export default ItemContentInputShort
