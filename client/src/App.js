import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/">
        Movie List Component
      </Route>
      <Route path="/Movies/:movieID">
        Movie Component
      </Route>
    </div>
  );
};

export default App;
