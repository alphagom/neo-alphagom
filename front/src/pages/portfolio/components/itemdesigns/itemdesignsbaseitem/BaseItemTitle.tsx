import React from 'react'

type TitleProps = {
  titleValue: string
}
function BaseItemTitle({ titleValue }: TitleProps) {
  return <div className="base-item-title">{titleValue}</div>
}

export default BaseItemTitle
