import { NavLink } from 'react-router-dom';
import './App.css';

function App() {


  return (
    <div className="App">
      <nav>
        <NavLink to="/Login">Login</NavLink>
      </nav>
      <header className="App-header">
        <h1>Hej Hej</h1>
      </header>
    </div>
  );
}

export default App;