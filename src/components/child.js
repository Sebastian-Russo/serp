import React from 'react'; 

const Child = ({searchTerm}) => {
  return (
    <>
      {searchTerm ? (
        <div className="container">You've searched for {searchTerm}</div>
      ) : (
        <div>Please make a search</div>
      )}
    </>
  );
};

export default Child;