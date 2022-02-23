import React from 'react'
import ReactPlayer from "react-player";
import './About.css'


function Youtube() {
  return (
    <div>
        <ReactPlayer
        className="react-player"
        playing
        width="70%"
        height="100%"
        url='https://www.youtube.com/watch?v=DqmW9tXquKk'/>
    </div>
  )
}

export default Youtube