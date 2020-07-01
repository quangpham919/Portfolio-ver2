import React from "react"
import "../styles/styles.scss"

import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Work from "../components/work"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
  <div className="container">
  <div></div>
  <div></div>
  <div></div>
  <div>
  <section className="header-section"> <Header />  </section>
  <section className="header-point"> <Banner/> </section>
  <section> <About/>  </section>
  <section> <Work /> <Footer />   </section> 
   
  </div>
  <div></div>
  <div></div>
  <div></div>
  </div>
  </>
)

export default IndexPage
