import React from 'react';
// import { Redirect } from 'react-router-dom';

const SearchResultSingle = ({single}) => {

  console.log('single', single)

  // const results = searchResults.length === 0 ? [] : searchResults.data.map((result,i) => {
  //   return (
  //     <div key={i} className="result">
  //       <div className="container">
  //       {/* <div>thumbnail clip: </div> */}
  //       <div>{result.clip.name}</div>
  //       <div>{result.clip.user.name}</div>
  //       <div>Views (check stats)</div>
  //             {/* <div>
  //               <video width="320" height="240">
  //                 <source src={result.clip.uri} type="" />
  //               </video>
  //             </div> */}
  //             {/* <div>Duration: {result.clip.duration}</div>
  //             <div>Language: {result.clip.language}</div>
  //             <div>Location: {result.clip.user.location}</div>
  //             <div>Comments: {result.clip.metadata.connections.comments.total}</div>
  //             <div>Is Featured: {result.is_featured}</div>
  //             <div>Description: {result.clip.description}</div> */}
  //         </div>
  //     </div>
  //   )
  // })

  return ( 
    <div>
      {/* {results} */}
    </div>
  );
}
 
export default SearchResultSingle;
