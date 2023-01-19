import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login.js'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Login /> } />
          {/* <Route path="/profile" element={ <Profile /> } /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}





export default App;