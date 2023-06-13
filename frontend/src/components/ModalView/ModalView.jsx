import React from "react"
import styles from "./ModalView.module.scss"

const ModalView = ({ modalView, setModalView }) => {
  return (
    <>
      {modalView && (
        <div
          className={styles.main_container}
          onClick={() => {
            setModalView(!modalView)
          }}
        >
          <div
            className={styles.content}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            okokok
          </div>
        </div>
      )}
    </>
  )
}

export default ModalView
