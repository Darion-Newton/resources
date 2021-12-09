
import './App.css';
import Landing from "./components/layouts/Landing";
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';


import './styles/index.css';
import './styles/tailwind.css';

const App = () => (
  
  <Router>
  <Fragment>
 
  

    <Route exact path="/" component={Landing} />

    <section className="container">

    </section>

    
  </Fragment>
</Router>

);

export default App;