import { Link } from "gatsby"
import { AnchorLink} from "gatsby-plugin-anchor-links"
import React from "react"
import myLogo from "../images/logo.svg"



const Header = () => 
{ 
return (


  <header> 
    <div className="inner-header">
      <div className="logo"><AnchorLink to="/#banner"> <img src={myLogo} alt="quang pham logo"/>  </AnchorLink> </div>
      <div className="navigation">
        <nav>
          <AnchorLink to="/#about" title="About"> About </AnchorLink> 
          <AnchorLink to="/#work" title="Work"> Work </AnchorLink> 
          <Link to="contact">Contact</Link>
        </nav>
      </div>
 
  </div>
  </header>
)
};

export default Header
