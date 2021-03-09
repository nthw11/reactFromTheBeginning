import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h1>HOME</h1>;
const About = () => <h1>About</h1>;
function App() {
  return (
    <Router>
      <h1>header</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <h1>footer</h1>
    </Router>
  );
}

export default App;
