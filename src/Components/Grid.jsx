import React from 'react'
import "./Grid.css"
import Grid1 from "/assets/hero2.png"
import Grid2 from "/assets/hero3.png"
import Grid3 from "/assets/hero3bg.png"
import { IoRemoveOutline } from "react-icons/io5";
export default function Grid() {
  return (
    <section className="GridSection">
        <div className="GridTitile">
            <h1>EDEN ROSE</h1>
            <span>
                <p>ENCHANTING FRAMES</p>
                <IoRemoveOutline className='line'/>

                <p>ENDLESS MEMORIES</p>
            </span>
        </div>
        <img src={Grid1} className='Grid2Img'/>
        <img src={Grid2} className='Grid3Img'/>
        <img src={Grid3} className='Grid4Img'/>
    </section>
  )
}
