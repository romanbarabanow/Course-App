import React from "react"
import LineTo from "react-lineto"
import "./GraphStyles.scss"

const Graph = ({
  firstColor,
  secondColor,
  thirdColor,
  fourhColor,
  fiveColor,
  sixColor,
  setNumberOfNode,
}) => {
  const data1 = [
    {
      id: 1,
      color: firstColor,
      marginRight: "30px",
      marginBottom: "15px",
    },
    {
      id: 2,
      color: secondColor,
      marginRight: "400px",
      marginBottom: "0px",
    },
    {
      id: 3,
      color: thirdColor,
      marginRight: "200px",
      marginBottom: "-40px",
    },
    {
      id: 4,
      color: fourhColor,
      marginRight: "70px",
      marginBottom: "40px",
    },
    {
      id: 5,
      color: fiveColor,
      marginRight: "350px",
      marginBottom: "-10px",
    },
    {
      id: 6,
      color: sixColor,
      marginRight: "150px",
      marginBottom: "-40px",
    },
  ]
  const elemJoin = [
    {
      from: 1,
      to: 3,
    },
    {
      from: 1,
      to: 2,
    },
    {
      from: 3,
      to: 2,
    },
    {
      from: 2,
      to: 5,
    },
    {
      from: 2,
      to: 4,
    },
    {
      from: 3,
      to: 4,
    },
    {
      from: 6,
      to: 5,
    },
  ]
  return (
    <div style={{ width: "700px", height: "300px", zIndex: 2 }}>
      {data1.map(function (el) {
        return (
          <div
            key={el.id}
            className={`elem-${el.id} graph`}
            onClick={() => {
              setNumberOfNode(el.id)
            }}
            style={{
              backgroundColor: el.color,
              marginLeft: el.marginRight,
              marginTop: el.marginBottom,
            }}
          >
            {el.id}
          </div>
        )
      })}
      {elemJoin.map(function (el, index) {
        return (
          <LineTo
            from={`elem-${el.from}`}
            className="line"
            to={`elem-${el.to}`}
            key={index}
            zIndex={0}
            borderColor="black"
            borderWidth={1}
          />
        )
      })}
    </div>
  )
}

export default Graph
