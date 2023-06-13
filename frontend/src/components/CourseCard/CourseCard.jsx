import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./CourseCard.module.scss"
import { Button } from "@mui/material"

const CourseCard = ({ name, type }) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <div>
        <NavLink to={"/about-course?id=2"}>
          <Button size="small" sx={{ marginLeft: 1 }}>
            Подробнее
          </Button>
        </NavLink>
        <NavLink to={"/start/1?id=2"}>
          <Button size="small" sx={{ marginLeft: 1 }}>
            Начать
          </Button>
        </NavLink>
      </div>
    </div>
  )
}

export default CourseCard
