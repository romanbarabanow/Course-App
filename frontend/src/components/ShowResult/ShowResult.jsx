import React from "react"
import styles from "./ShowResult.module.scss"
import DoneIcon from "@mui/icons-material/Done"
import DangerousIcon from "@mui/icons-material/Dangerous"

const ShowResult = ({ isRight }) => {
  return (
    <div className={styles.main_container}>
      {isRight ? (
        <div className={styles.content}>
          <DoneIcon sx={{ fontSize: 150, color: "green" }} />
          Верно
        </div>
      ) : (
        <div className={styles.content}>
          <DangerousIcon sx={{ fontSize: 150, color: "grey" }} />
          Неверно
        </div>
      )}
    </div>
  )
}

export default ShowResult
