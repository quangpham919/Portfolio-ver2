import React from "react"

import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import SkillBox from './common/skillBox'
const About = () =>{
  const myImage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "quang_new.jpg" }) {
        childImageSharp{
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    const programmingSkill = {
      image : `language`,
      title : `Languages that I have used`,
      skills : [`Javascript`,`Python`, `HTML`,`CSS`, `Sass`,`PHP`],
    }

    const tools = {
      image: `tools`, 
      title: `Tools that I have implemented to my projects`,
      skills: [`React`, `Angular`, `Node.js`, `Socket.io`,`Pandas`,`Numpy`,`Github` ],
    }

  return (
  <div className="about">
    
    <div className="aboutMe-container"> 
    
    <div className="myImage"> <Img fluid={myImage.placeholderImage.childImageSharp.fluid}/> </div>
    
    <div className="mainText">
        <h2>Hi folks, I'm Quang Pham. Nice to meet you</h2> 
        <h3> I'm a junior full stack developer based in Toronto, ON, who interested in building high-quality, responsive and user-friendly website.</h3>
        <p>
        Since beginning of my journey, I've specialized in Javascript and its libraries or frameworks (Angular, React, Node.js), building most of my website from front to back.
        While sharpening my Javascript skill, I also learn another language which is Python. So far, I've built a model for analyzing house's price in Ontario using Python.
        I value the simplicity and readability of codes. Besides programming, I usually spend time on playing musical instrumental (guitar and piano). 
        <br></br>
        I'm a new grad from George Brown College with a major of computer programming and analyst (mainly on web development) in Toronto, ON, who currently looking for an entry level opportunity as an Junior Full Stack Developer (or Front-end Developer).
       </p>
     </div>
     </div>



    <div className="mySkill"> 
      <SkillBox props={programmingSkill} /> 
      <SkillBox props={tools} /> 
    </div> 

  </div>
  )
};


export default About