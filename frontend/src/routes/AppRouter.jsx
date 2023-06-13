import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "../pages/Main/Main"
import AboutCourse from "../pages/AboutCourse/AboutCourse"
import MyCourse from "../pages/MyCourse/MyCourse"
import StartPage from "../pages/StartPage/StartPage"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-course" element={<AboutCourse />} />
        <Route path="/my-course" element={<MyCourse />} />
        <Route path="/start/:id" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
