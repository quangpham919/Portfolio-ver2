import React from "react"

import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLink, faSms, faUtensils, faChartBar, faGamepad } from "@fortawesome/free-solid-svg-icons"

const WorkBox = ({props}) =>{
  const iconSub = {

    chatApp : faSms,
    restaskest : faUtensils,
    housePriceAnalyst: faChartBar,
    gameParadise: faGamepad

  }
    return (
      <div className="workbox-inner-container"> 
          <div className="title">
            
            <h3> <FontAwesomeIcon icon={iconSub[props.icon]} />  {props.title} </h3>
          </div>
          <div className="mainText"> <p> {props.description} </p></div>
          <div className="button">
            <a href={props.github} rel="noopener noreferrer"> View more  </a> 
            { props.url ? <Link to={props.url}> <FontAwesomeIcon icon={faLink} /> </Link>  : ""} 
          </div>
      </div>
    )
};

export default WorkBox;