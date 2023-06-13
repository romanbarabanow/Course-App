import React from "react"
import AppRouter from "./AppRouter"
import { useSelector } from "react-redux"
import AdminRoute from "./AdminRoute"

const ChangeRouter = () => {
  const admin = useSelector((state) => state.user.admin)

  return <>{admin ? <AdminRoute /> : <AppRouter />}</>
}

export default ChangeRouter
