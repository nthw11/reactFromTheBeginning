import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FrozenDept from './components/FrozenDept';
import ProduceDept from './components/ProduceDept';
import BakeryDept from './components/BakeryDept';
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/' component={NavBar} />
        <Route path='/main' component={Main} />
        <Route path='/frozen-dept' component={FrozenDept} />
        <Route path='/produce-dept' component={ProduceDept} />
        <Route path='/bakery-dept' component={BakeryDept} />
      </div>
    </Router>
  );
}

export default App;
