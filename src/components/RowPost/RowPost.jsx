import React,{ useEffect, useState } from "react"
import "./RowPost.css"
import axios from "../../Axios"
import Youtube from "react-youtube"

function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [Url,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setmovies(response.data)
     }).catch((error)=>{
      console.log(error)
     })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie=(_id)=>{
    console.log(_id)
  }
  return (

    <div className='row'>
     <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj) => 
           <img onClick={()=>handleMovie(obj._id)} className={props.isSmall ? 'smallPoster':'poster'}src={obj.imageUrl} alt="poster" />
)}
        </div>
        <Youtube videoId="ZGi9NvYNMZ0" opts={opts}  />
    </div>
  )
}


export default RowPost