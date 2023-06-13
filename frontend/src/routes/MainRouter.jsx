import React from "react"
import { useSelector } from "react-redux"
import Login from "../pages/Login/Login"
import ChangeRouter from "./ChangeRouter"

const MainRouter = () => {
  const isReg = useSelector((state) => state.user.register)

  return <>{isReg ? <ChangeRouter /> : <Login />}</>
}

export default MainRouter
