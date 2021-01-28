import React from 'react'; 

const Child = ({searchTerm}) => {
  return (
    <div className="container">
      {searchTerm ? (
        <div>You've searched for {searchTerm}</div>
      ) : (
        <div>
          <div>Please make a search</div>
          <div>"Travel", "Animation", or "Example"</div>
        </div>
      )}
    </div>
  );
};

export default Child;