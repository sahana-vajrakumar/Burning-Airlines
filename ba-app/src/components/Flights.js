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
      flights: [],
      planes: []

    };

     this.showFlight = this.showFlight.bind(this);

  }

  getPlanes() {
    console.log('getting planes');
    axios.get('http://localhost:3000/airplanes.json').then(function (results){

      const cleaned = results.data.reverse().map(row => {
        delete row.created_at;
        delete row.updated_at;
        delete row.url;

        return row;
      });
      console.log('CLEANED', cleaned);
      this.setState({ planes: cleaned });
    }.bind(this));
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
        // let arr_flights = [];
        // for (let i =0;i<results.data.length;i++)
        //   if (results.data[i].origin === org && results.data[i].destination === dest)
        //     arr_flights.push(results.data[i]);
        const filterd = results.data.filter(elem => elem.origin === org && elem.destination === dest)
        this.setState({flights : filterd});
        // console.log(arr_flights);
      }.bind(this));

      this.getPlanes();
    }






  render(){
    console.log('STATE', this.state);
    return(
      <div>
        <h2>Search your flight</h2>
        <FlightSearch onSubmit= {this.showFlight}/>
        <FlightList flights_all={ this.state.flights } planes_all={ this.state.planes } />
        {/* <List list={ this.state.flights}/> */}

      </div>

    );
  }

  }


export default Flights;
