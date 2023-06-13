import React from "react"
import { useSearchParams } from "react-router-dom"
import { Container } from "@mui/material"
import Layout from "../../components/Layout"
import CourseDescription from "../../components/CourseDescription/CourseDescription"
import ChapterCourses from "../../components/ChapterCourses/ChapterCourses"

const AboutCourse = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const chapterArray = [
    {
      id: 1,
      name: "1 глава",
      task: ["taskONe", "taskONe", "taskONe", "taskONe", "taskONe"],
    },
    {
      id: 2,
      name: "2 глава",
      task: ["taskONe", "taskONe", "taskONe", "taskONe", "taskONe"],
    },
    {
      id: 3,
      name: "3 глава",
      task: ["taskONe", "taskONe", "taskONe", "taskONe", "taskONe"],
    },
  ]
  return (
    <Layout>
      <Container>
        <CourseDescription />
        <ChapterCourses chapterArray={chapterArray} />
      </Container>
    </Layout>
  )
}

export default AboutCourse
