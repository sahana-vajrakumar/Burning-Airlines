import React, {Component} from 'react';
import axios from 'axios';
import SeatsTaken from './SeatsTaken'
// import FlightSearch from './FlightSearch'
// import FlightList from './FlightList'
// import List from './List'
// import SeatsTaken from './SeatsTaken'






const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

function Seat(props){
  return <span className="seat">{ props.data.seat }</span>;
}

function Row(props){
  return (
    <div>
      { props.seats.map( seat => <Seat data={seat} />) }
      <br />
    </div>
  );
}

function Diagram(props){
  return props.seats.map( row =>  <Row seats={row}/> );
};

class Reservations extends Component{

  constructor(){
    super();
    this.state = {
      reservations: [],
      occupied: '',
      availableSeats: []


    };

     this.getReservation = this.getReservation.bind(this);
     this.createSeatGrid = this.createSeatGrid.bind(this);

  }





  createSeatGrid(rows, cols) {
    let seats = [];
    for(let i=0; i < rows; i++) {
      seats[i] = [];
      for(let j=0; j < cols; j++) {
        // Check for a matching reservation for seat I:J
        //   seats.push(  <Seat row={i} col={j} status={????} />  );

        // this.state.reservations includes this row+col i,j

        seats[i].push({ seat: `${i+1}${letters[j]}`, available: true });

      }
    }

    this.setState({ availableSeats: seats });
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

      const { plane } = this.props.location.state;
      this.createSeatGrid(plane.row, plane.column);

    }.bind(this));
  }



  componentWillMount(){


   this.getReservation();


    //console.log('SEATS:', this.state.availableSeats);
}











  render(){
    const { plane, flight } = this.props.location.state;
    console.log('PLANE ROW', plane.row * plane.column);
    console.log('FLight ID', flight.id);
    console.log('SEATS:', this.state.availableSeats);
    return(
      <div>
        <h1>Reservations</h1>
        <p>Total Number of Seats on this plane: {(plane.row * plane.column)}</p>
        <p>Number of Seats Available: {(plane.row * plane.column) - this.state.occupied}</p>

        <Diagram seats={ this.state.availableSeats }  />
        <SeatsTaken res_all={this.state.reservations} />

      </div>

    );
  }

}


export default Reservations;
