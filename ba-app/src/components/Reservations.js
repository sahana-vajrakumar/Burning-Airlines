import React, {Component} from 'react';
import axios from 'axios';
// import FlightSearch from './FlightSearch'
// import FlightList from './FlightList'
// import List from './List'
import SeatsTaken from './SeatsTaken'









class Reservations extends Component{

  constructor(){
    super();
    this.state = {
      reservations: [],
      occupied: ''


    };

     this.getReservation = this.getReservation.bind(this);

     this.getReservation();



  }








  getReservation() {
    let arr_flights = [];
    console.log('getting planes');
    axios.get('http://localhost:3000/reservations.json').then(function (results){

      const cleaned = results.data.reverse().map(row => {
        delete row.created_at;
        delete row.updated_at;
        delete row.url;

        return row;
      });
      let FlightID = this.props.location.state.flight.id
      const filtered = cleaned.filter(elem => elem.flight_id === FlightID);
        console.log('FILTERED:', filtered.length);


      console.log('CLEANED', cleaned);
      this.setState({reservations : filtered});
      this.setState({occupied : filtered.length});

    }.bind(this));
  }

  componentWillMount(){
    const { plane, flight } = this.props.location.state;

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    const createSeatGrid = function(rows, cols) {
      let seats = [];
      for(let i=0; i < rows; i++) {
        for(let j=0; j < cols; j++) {
          seats.push({ seat: `${i+1}${letters[j]}`, available: true });
        }
      }
      return seats;
    }


  console.log('Result' , createSeatGrid(plane.row, plane.cols));
}











  render(){
    const { plane, flight } = this.props.location.state;
    console.log('PLANE ROW', plane.row * plane.column);
    console.log('FLight ID', flight.id);
    return(
      <div>
        <h1>Reservations</h1>
        <p>Total Number of Seats on this plane: {(plane.row * plane.column)}</p>
        <p>Number of Seats Available: {(plane.row * plane.column) - this.state.occupied}</p>
        <SeatsTaken res_all={ this.state.reservations } />

      </div>

    );
  }

}


export default Reservations;
