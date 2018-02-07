import React, {Component } from 'react';

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



          <p>{s.origin} to {s.destination} on {s.date}  Flight Number:{s.flight_no}</p>
          
          <input type = "submit" value="Book Now!" />

          </div>
        )}
      </div>
    );
  }
}

export default FlightList;
