import React, { useState } from "react"
import styles from "./Graphq.module.scss"
import SwitchColors from "./SwitchColors"
import Graph from "./Graph"
import { Button, Container } from "@mui/material"
import ShowResult from "../showResult/showResult"

const GraphComponent = () => {
  const [isCompleted, setIsCompleted] = useState(false)
  const [isRight, setIsRight] = useState(false)

  const [color, setColor] = useState("")

  const colorsFirst = [
    {
      color: "#6965b4",
    },
    {
      color: "#b957db",
    },
    {
      color: "#d0b644",
    },
    {
      color: "#67a3da",
    },
  ]

  const colorsSecond = [
    {
      color: "#e3bd7d",
    },
    {
      color: "#981818",
    },
    {
      color: "#cbaff9",
    },
    {
      color: "#db12a3",
    },
  ]

  const [firstColor, setFirstColor] = useState("black")
  const [secondColor, setSecondColor] = useState("black")
  const [thirdColor, setThirdColor] = useState("black")
  const [fourhColor, setFourthColor] = useState("black")
  const [fiveColor, setFiveColor] = useState("black")
  const [sixColor, setSixColor] = useState("black")

  const [numberOfNode, setNumberOfNode] = useState(1)

  const checkTask = () => {
    const answer =
      firstColor != secondColor &&
      firstColor != thirdColor &&
      secondColor != thirdColor &&
      secondColor != fiveColor &&
      secondColor != fourhColor &&
      fiveColor != sixColor &&
      thirdColor != fourhColor
    if (answer) {
      setIsRight(true)
      setIsCompleted(true)
    } else {
      setIsCompleted(true)
    }
  }

  const colorChange = () => {
    if (numberOfNode == 1) {
      setFirstColor(color)
    }
    if (numberOfNode == 2) {
      setSecondColor(color)
    }
    if (numberOfNode == 3) {
      setThirdColor(color)
    }
    if (numberOfNode == 4) {
      setFourthColor(color)
    }
    if (numberOfNode == 5) {
      setFiveColor(color)
    }
    if (numberOfNode == 6) {
      setSixColor(color)
    }
  }

  return (
    <Container>
      <div className={styles.main_container}>
        {isCompleted ? (
          <ShowResult isRight={isRight} />
        ) : (
          <div className={styles.task_container}>
            <Graph
              firstColor={firstColor}
              secondColor={secondColor}
              thirdColor={thirdColor}
              fourhColor={fourhColor}
              fiveColor={fiveColor}
              sixColor={sixColor}
              setNumberOfNode={setNumberOfNode}
            />
            <SwitchColors
              colorChange={colorChange}
              colorsFirst={colorsFirst}
              colorsSecond={colorsSecond}
              setColor={setColor}
            />
          </div>
        )}
        <div className={styles.chech_task}>
          <Button color="secondary" onClick={checkTask}>
            {isCompleted ? "Следующее задание" : "Проверить"}
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default GraphComponent
