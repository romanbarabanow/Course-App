import React, { useState } from "react"
import styles from "./Login.module.scss"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setAdmin } from "../../store/reducers/userReducer"

const Login = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const store = useSelector((state) => state.user)

  const chechLogin = () => {
    if (email == "admin") {
      if (password == "admin2345") {
        dispatch(setAdmin("string"))
      }
    }
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.login_container}>
        <div>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            variant="standard"
            label="Введите почту"
          />
          <TextField
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            variant="standard"
            label="Введите пароль"
            onClick={() => {
              console.log(store)
            }}
          />
        </div>
        <div>
          <Button sx={{ fontSize: 15 }} onClick={chechLogin}>
            Войти
          </Button>
          <Button sx={{ fontSize: 12 }}>У меня нет аккаунта</Button>
        </div>
      </div>
    </div>
  )
}

export default Login
