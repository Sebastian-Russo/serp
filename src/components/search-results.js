import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({searchResults = [], handleClick}) => {

  const results = searchResults.length === 0 ? [] : searchResults.data.map((result,i) => {
    const thumbnail = result.clip.pictures.sizes[3].link
    const date = new Date(result.clip.created_time).getFullYear();
    return (
        <div key={i} onClick={()=>handleClick(result)}>
          <Link to={`/${result.clip.name}`}>
            <div className="thumbnail hover-wrapper">
                <img src={thumbnail} alt="thumbnail" width="300px"/>
                <div className="hover">
                  <p>Duration {result.clip.duration}</p>
                  <p>Created {date}</p>
                </div>
            </div>
            <div className="result">
              <div>{result.clip.name}</div>
              <div>{result.clip.user.name}</div>
              <div>Views {result.clip.stats.plays}</div> 
            </div>
          </Link>
        </div>
    )
  })

  const resultNumber = searchResults.total === undefined ? 0 : searchResults.total

  return ( 
    <div>
      <h2>Results {resultNumber}</h2>
      <div className="container results">
        {results}
      </div>
    </div>
  );
}
 
export default SearchResults;
