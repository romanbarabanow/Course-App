import React, { useState } from "react"
import AccountCircleIcon from "@mui/icons-material/AccountCircleTwoTone"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import LogoutIcon from "@mui/icons-material/Logout"
import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav}>
          <NavLink to={"/"} className={styles.nav_text}>
            <p>Главная</p>
          </NavLink>
          <NavLink to={"/my-course"} className={styles.nav_text}>
            <p>Мои курсы</p>
          </NavLink>
        </div>
        <div className={styles.account}>
          <AccountCircleIcon
            style={{ fontSize: 30, cursor: "pointer", color: "white" }}
            onClick={() => {
              setMenu(!menu)
            }}
          />
        </div>
      </header>
      <div className={styles.menu}>
        {menu && (
          <div className={styles.menu_container}>
            <div>
              <AccountBoxIcon />
              <p>Кабинет</p>
            </div>
            <div>
              <LogoutIcon />
              <p>Выйти</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Header
