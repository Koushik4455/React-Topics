import React from 'react'
import AudioFile from './sora.mp3'
const Song = () => {
  return (
    <div>
      <h1> This Is About Audio Click</h1>
      <audio controls>
        <source src={AudioFile} type='audio/ogg'/>
      </audio>
    </div>
  )
}

export default Song
