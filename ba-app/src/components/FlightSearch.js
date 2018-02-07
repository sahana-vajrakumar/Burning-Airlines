import React, {Component} from 'react';
import axios from 'axios';

class FlightSearch extends Component{

  constructor(){

   super();
   this.state = {
     origin: '',
     destination: ''
   };

   this._handleChange1 = this._handleChange1.bind(this);
   this._handleChange2 = this._handleChange2.bind(this);
   this._handleSubmit = this._handleSubmit.bind(this);

 }


  _handleChange1( e ){
    console.log(`origin:${e.target.value}`);
    this.setState({ origin: e.target.value }) ;
  }


  _handleChange2( e ){
  console.log(`Destination:${e.target.value}`);
    this.setState({ destination: e.target.value }) ;
  }

  _handleSubmit( e ){
  e.preventDefault();
  this.props.onSubmit(this.state.origin,this.state.destination);
  // console.log(this.state.content);

}

  render(){
    return(
      <div>

      <form onSubmit={this._handleSubmit}>
        <input type = "text" placeholder="Enter Origin" onChange={ this._handleChange1} />
          <input type = "text" placeholder="Enter Dest" onChange={ this._handleChange2}/>
            <input type = "Submit" value="Search Flights" />
      </form>

      </div>
    );
  }

}

export default FlightSearch;
