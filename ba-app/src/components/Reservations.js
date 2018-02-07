import React, {Component} from 'react';
// import axios from 'axios';
// import FlightSearch from './FlightSearch'
// import FlightList from './FlightList'
// import List from './List'

const SERVER_URL = 'http://localhost:3000/flights.json'

class Reservations extends Component{

  render(){
    console.log('PROPS', this.props.location.state);
    return(
      <div>
        <h1>Reservations</h1>
      </div>

    );
  }

  }


export default Reservations;
