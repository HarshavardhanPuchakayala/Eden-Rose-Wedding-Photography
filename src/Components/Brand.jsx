import React from 'react'
import "./Brand.css"
import "./About.css"
import Invite from "/assets/Invitation.png"
export default function Brand() {
  return (
    <>
    <div className="AboutDiv">
        <h4>Brand Identity</h4>
        <p>Eden Rose exudes elegance, romance, and timeless beauty. With a elegant color palette of black and white, their brand identity evokes a sense of enchantment and sophistication. Meticulous attention to detail and a passion for capturing the most precious moments of love and joy ensure that every couple's special day is immortalized in stunning imagery. Eden Rose is synonymous with professionalism, creativity, and a deep understanding of the unique emotions that come with saying "I do."</p>
    </div>
    <img src={Invite} className='BrandImg'/>
    <div className="AboutDiv">
        <h4>Typography</h4>
        <p>The main font used, The Seasons Light, exudes elegance and sophistication, perfectly reflecting the aesthetic of capturing timeless love stories. Complementing it is the secondary font, Calibri Regular, Which adds a modern touch and ensures readability. This harmonious combination of fonts creates a visually appealing and cohesive brand image, leaving a lasting impression on clients and making their wedding moments truly unforgettable.</p>
    </div>
    </>
  )
}
