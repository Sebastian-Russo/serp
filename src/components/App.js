import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchForm from './search-form';
import SearchResults from './search-results';
import SearchResultSingle from './search-result-single';
import Child from "./child";


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setsearchTerm] = useState('')
  const [single, setSingle] = useState();

  const fetchData = async (searchTerm) => {
    setsearchTerm(searchTerm)
    try {
      const { data } = await axios.get(`/data/${searchTerm}.json`)
      // console.log(data)
      setSearchResults(data)
    } 
    catch(err) {
      const empty = [];
      setSearchResults(empty)
      console.log(err)
    }
  }

  const handleClick = data => {
    setSingle(data.clip)
  }

  return (
    <Router>
      <div>
        <SearchForm fetchData={fetchData}/>
        <Child searchTerm={searchTerm} />
        <Switch>
          
          <Route 
          exact
            path="/:search" 
            render={props=>
              <SearchResults {...props} 
              searchResults={searchResults}
              searchTerm={searchTerm}
              handleClick={handleClick}/>
            } 
          />

          <Route 
            path={`/:${searchTerm}/:id`} 
            render={props=>
              <SearchResultSingle {...props} 
              searchTerm={searchTerm}
              single={single}/>
            } 
          />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
