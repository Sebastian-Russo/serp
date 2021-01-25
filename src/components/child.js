import React from 'react'; 

const Child = ({searchTerm}) => {
  return (
    <>
      {searchTerm ? (
        <div>You've searched for {searchTerm}</div>
      ) : (
        <div>Please make a search</div>
      )}
    </>
  );
};

export default Child;