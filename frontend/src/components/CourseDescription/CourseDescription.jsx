import React from "react"
import styles from "./CourseDescription.module.scss"
import CourseCard from "../CourseCard/CourseCard"

const CourseDescription = () => {
  return (
    <div className={styles.about_course_container}>
      <div className={styles.description_container}>
        <p className={styles.text_main}>Курс какой-то там фвьфдылвфыьв</p>
        <p className={styles.text_about}>
          For functional components you would replace this.props.location with
          the hook useLocation. Note, you could use window.location.search, but
          this won't allow to trigger React rendering on changes. If your
          (non-functional) component is not a direct child of a Switch you need
          to use withRouter to access any of the router provided props. React
          Router v3 React Router already parses the location for you and passes
          it to your RouteComponent as props. You can access the query (after ?
          in the url) part via this.props.location.query.__firebase_request_key
          If you are looking for the path parameter values, separated with a
          colon (:) inside the router, these are accessible via
          this.props.match.params.redirectParam This applies to late React
          Router v3 versions (not sure which). Older router versions were
          reported to use this.props.params.redirectParam.
        </p>
      </div>
    </div>
  )
}

export default CourseDescription
