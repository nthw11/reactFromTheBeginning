import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to='/main'>Whole store</Link>
          </li>
          <li>
            <Link to='/produce-dept'>Produce Dept</Link>
          </li>
          <li>
            <Link to='/frozen-dept'>Frozen Foods</Link>
          </li>
          <li>
            <Link to='/bakery-dept'>Bakery Dept</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
