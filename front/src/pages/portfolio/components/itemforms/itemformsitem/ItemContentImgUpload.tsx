import React, { useCallback } from 'react'

function ItemContentImgUpload({
  imageRef,
  setImageState,
}: {
  imageRef: React.MutableRefObject<HTMLInputElement | null>
  setImageState(value: string): void
}) {
  // 이미지 업로드와 미리보기
  const doUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return
      }
      const image = e.target.files[0]
      const CurrentImgUrl = URL.createObjectURL(image)

      const formData = new FormData()
      formData.append('image', image)

      setImageState(CurrentImgUrl)
    },
    []
  )

  return (
    <div>
      <input
        type="file"
        ref={imageRef}
        accept="image/jpg, image/png, image/jpeg, image/gif"
        onChange={doUploadImage}
      />
    </div>
  )
}

export default ItemContentImgUpload
