import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {


    render(){
        const someStateID = 50;

        return(
        <div>
          <div className="demo-layout-transparent mdl-layout mdl-js-layout">
  <header className="mdl-layout__header mdl-layout__header--transparent">
    <div className="mdl-layout__header-row">

      <span className="mdl-layout-title">Title</span>

      <div className="mdl-layout-spacer"></div>

      <nav className="mdl-navigation">

            <h2>This is the home page</h2>

                <a className="mdl-navigation__link" href=""><Link to="/flights">Flight Search</Link></a>
                <br />
                <a className="mdl-navigation__link" href=""><Link to={`/flights/${someStateID}`}>example flight id link</Link></a>


          </nav>
  </div>
  </header>
        </div>
        </div>

        );
    }
}

export default Home;
