import React, { useState } from "react"
import styles from "./MainAdminPage.module.scss"
import { Button, Container } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import ModalView from "../../components/ModalView/ModalView"

const MainAdminPage = () => {
  const [modalView, setModalView] = useState(false)

  const [courses, setCourses] = useState([
    {
      tittle: "Крутой курс для тру мужиков",
      description: "adasdadasdas",
    },
  ])

  const showModal = () => {
    setModalView(!modalView)
  }

  return (
    <>
      <ModalView modalView={modalView} setModalView={setModalView} />
      <Container>
        <div className={styles.create_course_container}>
          <Button onClick={showModal}>Создать курс</Button>
        </div>
        <div className={styles.courses_container}>
          {courses.map(function (el) {
            return (
              <div className={styles.courses}>
                <div>{el.tittle}</div>
                <div>
                  <EditIcon sx={{ cursor: "pointer" }} />
                  <DeleteIcon sx={{ cursor: "pointer" }} />
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default MainAdminPage
