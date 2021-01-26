import React from 'react';
import ResponsivePlayer from './responsive-player';
import './search-results.css';

const SearchResultSingle = ({single}) => {
  console.log(single)
  
  const { url } = single; 

  return ( 
     <div>
        <div className="container">
        <div>{single.name}</div>
        <div>{single.user.name}</div>
        <div>
            <ResponsivePlayer 
              url={url}
            />
        </div>
        <div>Duration: {single.duration}</div>
        <div>Views {single.stats.plays}</div>
        <div>Location: {single.user.location}</div>
        <div>Comments: {single.metadata.connections.comments.total}</div>
        <div>Description: {single.description}</div>
        </div>
      </div>
  );
}
 
export default SearchResultSingle;
