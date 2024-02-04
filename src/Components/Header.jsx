import React from 'react'
import "./Header.css"
import { IoRemoveOutline } from "react-icons/io5";
export default function Header() {
  return (
    <>
<header>
<div className="HeaderTitle">
        <p className="HeaderName1">
            ROMANTIC & MOMENTS
        </p>
        <img src="/assets/HeroIcon.png" className='HeaderTitleImg' />
        <p className="HeaderName2">
            WEDDING PHOTOGRAPHY
        </p>
    </div>
    <div className="HeaderBride">
        <h1>EDEN ROSE</h1>
    </div>
    <div className='headerfooter'>
        <p className="headerfootername1">
            ENCHANTING FRAMES
        </p>
        <IoRemoveOutline className="headerfooterLine"/>
        <p className='headerfootername2'>
            ENDLESS MEMORIES
        </p>
    </div>

    </header>
    </>
  )
}
