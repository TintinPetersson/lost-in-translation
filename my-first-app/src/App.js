import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './views/Login.js'
import Profile from './views/Profile';
import Translation from './views/Translation';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}





export default App;