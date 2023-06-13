import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainAdminPage from "../pages/MainAdminPage/MainAdminPage"

const AdminRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainAdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AdminRoute
