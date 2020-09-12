import React from "react"
import logo from "../images/banner_white.png"
import Emoji from './common/emoji'
import {Link} from "gatsby"

const Banner = () =>{

return (
     
      <div className="banner">
          <div className="row"> 
            <div className='main-text'> 
              
                <h1 >Cong Nhat Quang <br></br>Pham </h1>    
                <br></br>         
                <h3> <Emoji symbol="🚀"  label="rocket"/> Junior Software Developer</h3>
                <br></br>
                <p>I build elegant, responsive and user-friendly websites </p>
                <br></br>
                
                <div className="button">
                      <Link to="contact" >  Get in touch </Link>
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
 