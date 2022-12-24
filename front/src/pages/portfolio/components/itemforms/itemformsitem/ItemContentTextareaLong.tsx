import React from 'react'

function ItemContentTextareaLong({
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
      <textarea
        placeholder={placeholder}
        value={content}
        onChange={(e) => {
          setFunction(e.target.value)
        }}
      />
    </div>
  )
}

export default ItemContentTextareaLong
