import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {


    render(){
        const someStateID = 50;

        return(
        <div>
            <h2>This is the home page</h2>
            <ul>
                <li>Go <Link to="/flights">Flight Search</Link></li>
                <li>a link from state: <Link to={`/flights/${someStateID}`}>example flight id link</Link></li>

            </ul>
        </div>
        );
    }
}

export default Home;
