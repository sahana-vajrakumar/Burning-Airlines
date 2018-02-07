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

          <p><Link to={`/flights/${s.id}`}>{s.id}</Link> {s.origin} to {s.destination} on {s.date} {s.flight_no}  </p>

          </div>
        )}

      </div>
    );
  }
}

export default FlightList;
