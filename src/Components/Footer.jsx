import React from 'react'
import "./Footer.css"
import Img1 from "/assets/board.png"
import Img2 from "/assets/footer.png"
export default function Footer() {
  return (
    <>
    <img src={Img1} className='footerImg1'/>
    <div className="footerContent">
        <h4>Designer</h4>
        <h3>Yuliia Hrabynska</h3>
        <div className="FootersubContent">
            <p>Eden Rose is dedicated to capturing the beauty,joy and romance of your special day.with a keen eye for detail and a passion for storytelling, her team of skilled photographers creates breathtaking images that will be cherished for a lifetime. From intimate elopements to grand celebrations, they strive to document every precious moment, ensuring that each image reflects the unique love story of the couple. with their professionalism, creativity, and professionalism, Eden Rose Wedding Photographer Brand guarantees a seamless and unforgettable experience for your wedding day.</p>
        </div>
    </div>
    <img src={Img2} className='footerImg1'/>
    </>
  )
}
