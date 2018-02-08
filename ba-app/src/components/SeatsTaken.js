import React, {Component } from 'react';





class SeatsTaken extends Component {
  constructor(props) {
    super(props);


    console.log(props);

  }




  render() {
    return (
      <div>
        <h2>Seats Taken</h2>

        {this.props.res_all.map (s=>
          <p>{s.seat_row}{s.seat_column}
        </p>
        )}
      


      </div>
    );
  }
}


export default SeatsTaken;
