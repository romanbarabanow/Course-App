import styles from "./Main.module.scss"
import CourseCard from "../../components/CourseCard/CourseCard"
import { Container, Grid } from "@mui/material"
import Footer from "../../components/Footer/Footer"
import Layout from "../../components/Layout"

const Main = () => {
  return (
    <Layout need="not">
      <div className={styles.main_container}>
        <Container sx={{ marginBottom: 10 }}>
          <CourseCard name="Курс для начинающего программиста на React Js" />
          <CourseCard name="Курс для начинающего программиста на React Js" />
          <CourseCard name="Курс для начинающего программиста на React Js" />
        </Container>
        <Footer />
      </div>
    </Layout>
  )
}

export default Main
