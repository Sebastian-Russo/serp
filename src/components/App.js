import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchForm from './search-form';
import SearchResults from './search-results';
import Child from "./child";


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setsearchTerm] = useState('')
  const [single, setSingle] = useState();

  const fetchData = async (searchTerm) => {
    setsearchTerm(searchTerm)
    try {
      const { data } = await axios.get(`/data/${searchTerm}.json`)
      console.log(data)
      setSearchResults(data)
    } 
    catch(err) {
      const empty = [];
      setSearchResults(empty)
      console.log(err)
    }
  }

  // next step, pass props through to signle reults component 
  const handleClick = data => {
    console.log('click', data.clip)
    setSingle(data.clip)
  }

  // use render method, which passes in a function to be called when the location matches
  return (
    <Router>
      <div>
        <SearchForm fetchData={fetchData}/>
        <Child searchTerm={searchTerm} />
        <Switch>
          <Route 
            path="/" 
            render={props=>
              <SearchResults {...props} 
              searchResults={searchResults}
              searchTerm={searchTerm}
              handleClick={handleClick}/>
            } 
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
