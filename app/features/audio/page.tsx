// Import React and the AudioPlayer component
import React from 'react'
import AudioPlayer from './components/AudioPlayer'

const AudioPlayerPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-4 text-2xl font-bold">Audio Player</h1>
      <AudioPlayer />
    </div>
  )
}

export default AudioPlayerPage
