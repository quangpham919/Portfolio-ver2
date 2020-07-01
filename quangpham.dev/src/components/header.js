import { Link } from "gatsby"

import React from "react"
import myLogo from "../images/logo.svg"

const isBrowser = typeof window !== `undefined`

const getScrollPosition = ({element, useWindow}) => {
  if(!isBrowser) {return {x:0,y:0}}

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();
  
  return useWindow 
  ? {x:window.scrollX , y:window.scrollY}
  : {x: position.left , y: position.top}
}

const Header = () => 
{ 
return (


  <header> 
    <div className="inner-header">
      <div className="logo"><Link to="/"> <img src={myLogo} alt="quang pham logo"/>  </Link> </div>
      <div className="navigation">
        <nav>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
 
  </div>
  </header>
)
};

export default Header
