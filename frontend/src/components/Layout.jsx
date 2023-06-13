import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ children, need }) => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      {children}
      {need ? "" : <Footer />}
    </div>
  )
}

export default Layout
