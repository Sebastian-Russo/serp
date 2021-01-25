import React from 'react';
// import { Redirect } from 'react-router-dom';

const SearchResultSingle = ({single}) => {
  console.log(single)
  return ( 
     <div>
        <div className="container">
        <div>{single.name}</div>
        <div>{single.user.name}</div>
        <div>Views (check stats)</div>
            <div>
              <video width="320" height="240">
                <source src={single.uri} type="" />
              </video>
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
