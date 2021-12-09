
import './App.css';
import Landing from "./components/layouts/Landing";
import Formpress from './components/layouts/Formpress';

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';


import './styles/index.css';
import './styles/tailwind.css';
import Formconst from './components/layouts/Formconst';

const App = () => (
  
  <Router>
  <Fragment>
 
  

    <Route exact path="/" component={Landing} />
    
 

  <Route exact path="/" component={Formpress} />
  <Route exact path="/" component={Formconst} />
   <section className="container block">
    </section>

    
  </Fragment>

 
</Router>

);

export default App;