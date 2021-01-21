import React from 'react'; 

const Child = ({child}) => {
  return (
    <>
      {child ? (
        <div>You've searched for {child}</div>
      ) : (
        <div>Please make a search</div>
      )}
    </>
  );
};

export default Child;