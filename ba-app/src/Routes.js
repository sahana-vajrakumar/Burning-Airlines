import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Flights from './components/Flights';
<<<<<<< HEAD
import Reservation from './components/Reservation'
=======
import Reservations from './components/Reservations';
>>>>>>> f70afc8ca415fae13998a3950dd7ffe8457bc006

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
