import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Flights from './components/Flights';

import Reservations from './components/Reservations';


const Routes = (
    <Router>
        <div>
        <Route exact path="/" component={ Home }/>


        <Route exact path="/flights" component={ Flights } />
        <Route path="/flights/:id" component={ Reservations } />


        </div>
    </Router>
);

export default Routes;
