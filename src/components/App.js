import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchForm from './search-form';
import SearchResults from './search-results';
import SearchResultSingle from './search-result-single';
import Child from "./child";


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [child, setChild] = useState('')
  const [single, setSingle] = useState([]);

  const fetchData = async (searchTerm) => {
    setChild(searchTerm)
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

  // ******************** ISSUE cannot get props to send to search reulst single component **/
  const handleClick = single => {
    console.log('click', single)
    setSingle(single)
  }

  // use render method, which passes in a function to be called when the location matches
  return (
    <Router>
      <div>
        <SearchForm fetchData={fetchData}/>
        <Child child={child} />
        <Switch>
          <Route 
            path="/" 
            render={props=>
              <SearchResults {...props} 
              searchResults={searchResults}
              handleClick={handleClick}/>
            } 
          />
          <Route 
            path="/:id" 
            children={props=>
              <SearchResultSingle {...props}
              searchResults={searchResults}
              single={single}/>
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
