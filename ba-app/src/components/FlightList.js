import React, {Component } from 'react';

import { Link } from 'react-router-dom';


class FlightList extends Component {
  constructor(props) {
    super(props);
    console.log(props);

  }


  render() {
    const { planes_all, flights_all } = this.props;
    return (
      <div>
        <h3>Search Results</h3>

        {flights_all.map (s => {
          const url = `/flights/${s.id.toString()}`
          const plane = findPlane(planes_all, s);
          return (
              <div>
                <p>
                  {s.origin} to {s.destination} on {s.date} on plane {plane.name}
                  <Link to={{
                   pathname: url,
                   state: { flight: s, plane: plane}
                 }}>Flight {s.id}</Link>
                </p>
              </div>
          )
        }
        )}

      </div>
    );
  }
}

export default FlightList;
