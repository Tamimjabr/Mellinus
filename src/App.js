import React from 'react';
//import $ from 'jquery'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
} from "react-router-dom";
import Home from "./pages/Home"


function App() {
  return (
    <Router>
  

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      
      <Route path="/">
        <Home />
      </Route>
     
    </Switch>
 
</Router>
  );
}

export default App;
