import React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Button } from "@mui/material"
import styles from "./ChapterCourses.module.scss"

const ChapterCourses = ({ chapterArray }) => {
  return (
    <div className={styles.chapter_container}>
      {chapterArray.map(function (el) {
        return (
          <Accordion key={el.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={el.id}
            >
              <Typography>{el.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {el.task.map((task) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "7px",
                  }}
                >
                  <Typography>{task}</Typography>
                  <Button color="secondary">Начать</Button>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default ChapterCourses
