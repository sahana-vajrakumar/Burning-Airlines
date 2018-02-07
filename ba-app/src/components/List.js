import React, { Component } from 'react';


class List extends Component {
  render() {
    if (!this.props.list || !this.props.list.length) {
      return <div></div>
    }

    return (
      <div className="List">
        <table>
          <thead>
            <tr>
              {Object.keys(this.props.list[0]).map(key => <th key={key}>{key}</th>)}
  		      </tr>
          </thead>
          <tbody>
            {
              this.props.list.map( l => (
                <tr key={ l.id }>
                  {Object.keys(l).map(key => <td>{l[key]}</td>)}
                  <input type = "submit" value="Book Now!" />
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
