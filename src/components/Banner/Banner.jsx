import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import { imageUrl } from '../../Constants/Constants'
import "./Banner.css"

function Banner() {
  const [movie, setmovie] = useState()
 useEffect(() => {
   axios.get("movie").then((response)=>{
    console.log(response.data[0])
    setmovie(response.data[3])
   }).catch((error)=>{
    console.log(error)
   })
 
  
     }, [])

  return (
    <div style={{backgroundImage:`url(${movie ? movie.imageUrl : ""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner-btns'>
                <button className='button'>Play</button>
                <button className='button'>My LIst</button>

            </div>
            <h1 className='description'>{movie ? movie.description : ""}</h1>
        
        </div>
<div className="fade-bottom"></div>
    </div>
  )
}

export default Banner