import React from 'react';
import ReactPlayer from 'react-player';
// import { Redirect } from 'react-router-dom';

const SearchResultSingle = ({single}) => {
  console.log(single.uri)
  
  const video = single.uri 

  return ( 
     <div>
        <div className="container">
        <div>{single.name}</div>
        <div>{single.user.name}</div>
        <div>Views (check stats)</div>
        <div>
        <ReactPlayer url="https://vimeo.com/video/162413069" />
            {/* <ReactPlayer url={`https://vimeo.com/${video}`} /> */}
            {/* <video key={video}>
              <source src={`https://vimeo.com/${video}`} />
          </video> */}
        </div>
        <div>Duration: {single.duration}</div>
        <div>Location: {single.user.location}</div>
        <div>Comments: {single.metadata.connections.comments.total}</div>
        <div>Description: {single.description}</div>
        </div>
      </div>
  );
}
 
export default SearchResultSingle;
