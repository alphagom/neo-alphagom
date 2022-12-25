import React from 'react'

type ContentProps = {
  contentValue: string
}

function BaseItemContent({ contentValue }: ContentProps) {
  return <div className="base-item-content">{contentValue}</div>
}

export default BaseItemContent
