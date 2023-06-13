import React from "react"
import styles from "./Graphq.module.scss"

const SwitchColors = ({ colorsFirst, colorsSecond, setColor, colorChange }) => {
  return (
    <div className={styles.choose_color}>
      <p className={styles.text}>Выберите цвет</p>
      <div style={{ display: "flex" }}>
        {colorsFirst.map(function (el, index) {
          return (
            <div
              key={index}
              style={{
                width: " 70px ",
                height: "70px",
                backgroundColor: el.color,
                borderRadius: "50%",
                marginLeft: "15px",
                cursor: "pointer",
              }}
              onClick={() => {
                setColor(el.color)
                colorChange()
              }}
            />
          )
        })}
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        {colorsSecond.map(function (el, index) {
          return (
            <div
              key={index}
              style={{
                width: " 70px ",
                height: "70px",
                backgroundColor: el.color,
                borderRadius: "50%",
                marginLeft: "15px",
                cursor: "pointer",
              }}
              onClick={() => {
                setColor(el.color)
                colorChange()
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SwitchColors
