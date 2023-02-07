import React, { PropsWithChildren } from 'react'
import './LoginModal.scss'

interface ModalDefaultType {
  loginModalHandler: () => void
}

function LoginModal({
  loginModalHandler,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    if (loginModalHandler) {
      loginModalHandler()
    }
  }
  const onKeyDownHandler = () => {
    // hahahaha
  }
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-dialog-box">
          LoginModal
          {children}
        </div>
        {/* div tag에 onClick 사용하는 방법!!!!! */}
        <div
          className="modal-backdrop"
          role="button"
          aria-hidden="true"
          onClick={onClickHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
    </div>
  )
}

export default LoginModal
