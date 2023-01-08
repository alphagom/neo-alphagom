import React from 'react'

function ItemContentInputShort({
  placeholder,
  content,
  setFunction,
}: {
  placeholder: string
  content: string
  setFunction(value: string): void
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        value={content}
        onChange={(e) => {
          setFunction(e.target.value)
        }}
      />
    </div>
  )
}

export default ItemContentInputShort
