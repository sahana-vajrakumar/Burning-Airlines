import React, {Component } from 'react';

import { Link } from 'react-router-dom';

class FlightList extends Component {
  constructor(props) {
    super(props);
    console.log(props);

  }


  render() {
    return (
      <div>
        <h3>Search Results</h3>

        {this.props.flights_all.map (s=>


          <div>



          <p>{s.origin} to {s.destination} on {s.date} <Link to= {s.flight_no}>{s.flight_no}</Link></p>

          <input type = "submit" value="Book Now!" />

          </div>
        )}
      </div>
    );
  }
}

export default FlightList;
