import React from "react"
import "../styles/styles.scss"

import MainPage from "../components/HomePage";
import Header from "../components/header"

const IndexPage = () => (
  <>
  <section className="header-section"> <Header /> </section> 
  <MainPage  />
  </>
)

export default IndexPage
