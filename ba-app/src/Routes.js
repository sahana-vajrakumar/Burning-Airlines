import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Flights from './components/Flights';

const Routes = (
    <Router>
        <div>
        <Route exact path="/" component={ Home }/>
        <Route path="/flights/:id" component={ Flights }/>
        <Route exact path="/flights" component={ Flights }/>
        </div>
    </Router>
);

export default Routes;
