import React from 'react';
import { Route, Link } from 'react-router-dom';

const HelpCustomer = () => <h1>help customer</h1>;
const HelpHost = () => <h1>help host</h1>;

function Help() {
  return (
    <div>
      <div>
        <Link to='/help/customer'>I am a customer</Link> |
        <Link to='/help/host'>I am a host</Link>
      </div>
      <h2>help please</h2>
      <p>image of help</p>
      <Route path='/help/customer' component={HelpCustomer} />
      <Route path='/help/host' component={HelpHost} />
      <h3>help footer</h3>
    </div>
  );
}

export default Help;
