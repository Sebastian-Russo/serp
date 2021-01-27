import React from 'react';
import { useHistory } from 'react-router-dom';
import ResponsivePlayer from './responsive-player';
import './search-results.css';

const SearchResultSingle = ({single}) => {
  console.log(single.uri)
  
  const { uri } = single; 

  const history = useHistory();

  return ( 
      <div className="container">
        <div>{single.name}</div>
        <div>{single.user.name}</div>
        <div>
            <ResponsivePlayer 
              uri={uri}
            />
        </div>
        <div>Duration: {single.duration}</div>
        <div>Views {single.stats.plays}</div>
        <div>Location: {single.user.location}</div>
        <div>Comments: {single.metadata.connections.comments.total}</div>
        <div>Description: {single.description}</div>
        <button onClick={() => history.goBack()}>Back</button>
      </div>
  );
}
 
export default SearchResultSingle;
