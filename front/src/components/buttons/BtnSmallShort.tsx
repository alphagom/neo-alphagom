import React from 'react'

function BtnSmallShort({
  BtnName,
  doFunction,
}: {
  BtnName: string | number
  doFunction(): void
}) {
  return (
    <div>
      <button type="button" onClick={() => doFunction()}>
        {BtnName}
      </button>
    </div>
  )
}

export default BtnSmallShort
