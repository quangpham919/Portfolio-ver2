import React from 'react'

import WorkBox from './common/workBox'

const Work = () =>{
  const chatApp = { 
    title: `Realtime Chat App`,
    icon : `chatApp`,
    description: ` A simple realtime communication tool for developer's teams to enhance teamwork and produce effectively and efficiently`,
    github: `https://github.com/quangpham919/Chat-Application`
  }
  const restaskest = { 
    title: `Restaskest`,
    icon : `restaskest`,
    description: ` A restaurant management cross-platform application for managers to administer their staff and business resources easier, which improving business's procedures also make communication between employer and employee more efficiently`,

    github: `https://github.com/quangpham919/CapstoneProject`,
    url:``
  }
  const housePriceAnalyst= {
    title: `Ontario house analyst`,
    icon: `housePriceAnalyst`,
    description: `An analysis table and simple neural network model of house price in Ontario based on its unique features`,
    github: `https://github.com/quangpham919/ontario-house-price-analysing`
  }
  const gameParadise = {
    title: `Game Paradise`,
    icon: `gameParadise`,
    description: `A stimulated web based game lobby, where you can create an account and join some fun game to compete with other players.`,
    github:`https://github.com/quangpham919/Full_Stack_Project`
  }
  return (
    <div className="work"> 
        <div className="work-header">
          <h1> My Recent Work</h1>
          <p>Here is some project that I've work on recently. </p>
        </div> 

        <div className="work-container">
          <WorkBox props={restaskest} /> 
          <WorkBox props={chatApp} /> 
          <WorkBox props={housePriceAnalyst} /> 
          <WorkBox props={gameParadise} /> 
        </div>
    </div>
  )

};

export default Work