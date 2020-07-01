import React from "react"
import logo from "../images/banner_white.png"
import Emoji from './common/emoji'


const Banner = () =>{

return (
     
      <div className="banner">
          <div className="row"> 
            <div className='main-text'> 
              
                <h1 >Cong Nhat Quang <br></br>Pham </h1>    
                <br></br>         
                <h3> <Emoji symbol="🚀"  label="rocket"/> Junior Full Stack Developer</h3>
                <br></br>
                <p>I build elegant, responsive and user-friendly websites </p>
                <br></br>
                
                <div className="button">
                      <a href="mailto:quangpham9199@gmail.com" >  Get in touch </a>
                </div>  

            </div>

            <div className="main-image">
                 <img src={logo} alt="banner"/> 
            </div>

        </div>
      </div>
     
    )
}

export default Banner;
