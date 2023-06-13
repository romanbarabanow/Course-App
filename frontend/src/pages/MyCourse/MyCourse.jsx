import React, { useState } from "react"
import styles from "./MyCourse.module.scss"
import Layout from "../../components/Layout"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"
import MyCourseList from "../../components/MyCourseList/MyCourseList"

const MyCourse = () => {
  const [isCourse, setIsCourse] = useState(false)

  return (
    <Layout>
      {isCourse ? (
        <MyCourseList />
      ) : (
        <div className={styles.nothing_container}>
          <AccessTimeOutlinedIcon sx={{ fontSize: 150, color: "grey" }} />
          <p className={styles.text_nothing}>Тут пока ничего нет</p>
        </div>
      )}
    </Layout>
  )
}

export default MyCourse
