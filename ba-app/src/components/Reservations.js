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
        console.log('FILTERED:', filtered);


      console.log('CLEANED', cleaned);
      this.setState({reservations : filtered});

    }.bind(this));
  }






  render(){
    console.log('PLANE ROW', this.props.location.state.plane.row);
    console.log('FLight ID', this.props.location.state.flight.id);
    return(
      <div>
        <h1>Reservations</h1>
        <SeatsTaken res_all={ this.state.reservations } />

      </div>

    );
  }

}


export default Reservations;
