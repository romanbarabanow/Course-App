import React, { useState } from "react"
import styles from "./MyCourseList.module.scss"
import { Container } from "@mui/material"

const MyCourseList = () => {
  const [choosenCourse, setChoosenCourse] = useState("В процессе")
  return (
    <Container>
      <p className={styles.my_course_container}>Мои курсы</p>
      <div className={styles.choose}>
        <p
          style={{
            color: `${choosenCourse == "В процессе" ? "grey" : "black"}`,
          }}
          onClick={() => {
            setChoosenCourse("В процессе")
          }}
        >
          В процессе
        </p>
        <p
          style={{
            color: `${choosenCourse == "Завершенные" ? "grey" : "black"}`,
          }}
          onClick={() => {
            setChoosenCourse("Завершенные")
          }}
        >
          Завершенные
        </p>
      </div>
    </Container>
  )
}

export default MyCourseList
