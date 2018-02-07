import React, {Component} from 'react';
import axios from 'axios';
import FlightSearch from './FlightSearch'
import FlightList from './FlightList'
import List from './List'

const SERVER_URL = 'http://localhost:3000/flights.json'

class Flights extends Component{

  constructor(){
    super();
    this.state = {
      flights: []


    };

     this.showFlight = this.showFlight.bind(this);

  }




  showFlight( org,dest ){


      axios.get(SERVER_URL).then(function (results){
        const cleaned = results.data.reverse().map(row => {
          delete row.created_at;
          delete row.updated_at;
          delete row.url;

          return row;
        })
        console.log(results);
        let arr_flights = [];
        for (let i =0;i<results.data.length;i++)
          if (results.data[i].origin === org && results.data[i].destination === dest)
            arr_flights.push(results.data[i]);
        this.setState({flights : arr_flights});
        console.log(arr_flights);
      }.bind(this));


    }






  render(){
    return(
      <div>
        <h2>Search your flight</h2>
        <FlightSearch onSubmit= {this.showFlight}/>
        <FlightList flights_all={ this.state.flights } />
        {/* <List list={ this.state.flights}/> */}

      </div>

    );
  }

  }


export default Flights;
