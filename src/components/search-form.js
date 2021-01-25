import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 

const SearchForm = ({fetchData}) => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(searchTerm)
    history.push(`/${searchTerm}`)
    setSearchTerm('')
  };

  return (
    <>      
      <form onSubmit={handleSubmit} className="container">
        <input type="submit" disabled={searchTerm === ""} />
        <input 
          type="text"
          placeholder={"search"}
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)}
        />
      </form>
    </>
  );
}

export default SearchForm;