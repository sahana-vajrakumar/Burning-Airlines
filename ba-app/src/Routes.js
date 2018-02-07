import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Flights from './components/Flights';
import Reservation from './components/Reservation'

const Routes = (
    <Router>
        <div>
        <Route exact path="/" component={ Home }/>

        <Route exact path="/flights" component={ Flights } />
        <Route path="/flights/:id" component={ Reservation } />
        </div>
    </Router>
);

export default Routes;
