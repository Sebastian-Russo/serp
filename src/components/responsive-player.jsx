import React from 'react';
import ReactPlayer from 'react-player/vimeo';
import './responsive-player.css';


const ResponsivePlayer = ({uri}) => {

  let url = uri.replace('/videos', '');

  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={`https://vimeo.com${url}`}
        width='100%'
        height='100%'
        controls={true}
      />
    </div>
  )
}

export default ResponsivePlayer;