import React from 'react'
import './styles/Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
           <video autoPlay loop muted className='banner_video'>
               <source src='https://i.imgur.com//PpH27gO.mp4' type='video/mp4'/>
           </video>
        </div>
    )
}

export default Banner
