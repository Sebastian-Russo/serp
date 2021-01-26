import React from 'react';
import ReactPlayer from 'react-player';
import './responsive-player.css';


const ResponsivePlayer = ({url}) => {
  console.log('player uri', url)

  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='https://vimeo.com/162413069'
        width='100%'
        height='100%'
        // onProgress={onProgress}
      />
    </div>
  )
}

export default ResponsivePlayer;